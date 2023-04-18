import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faBed, faPlane, faFilm, faBurger, faBagShopping, faBus, faTag, faCoins } from '@fortawesome/free-solid-svg-icons';
import Progress from './BudgetProgress';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../firebase';

const BlockContainer = styled.div`
    margin-top: 10px;
` 

const Categories = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Category = styled.div`
    font-family: "Sen", sans-serif;
    height: 180px;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5px;
    border-radius: 10px;
    background-color: #EFEFEF;

    &:hover {
        /* background-color: #F8F8F8; */
        border: 1px solid #1746A2;
    }
`

const CategoryTitle = styled.h6`
    font-weight: 500;
    font-size: 1.1em;
`

const CategoryIcon = styled(FontAwesomeIcon)`
    font-size: 1.6em;
    margin: 10px;
    color: #1746A2;
`

const CategoryInput = styled.input`
    width: 100px;
    background: none;
    height: 40px;
    font-family: "Sen", sans-serif;
    font-size: 1.8em;
    border: none;
    outline: none;
    text-align: center;
    color: #2A2A2A;

    &::placeholder {
        color: #CACACA;
    }
`

const TotalAmount = styled.p`
    width: 100px;
    background: none;
    height: 40px;
    font-family: "Sen", sans-serif;
    font-size: 1.8em;
    border: none;
    outline: none;
    text-align: center;
    color: #2A2A2A;
`

// Goal area
const Limit = styled.div`
    margin: 15px 10px;
    font-family: 'Sen', sans-serif;
`

const LimitTitle = styled.h4`
    display: inline-block;
    margin-right: 10px;
`

const LimitInput = styled.input`
    background: none;
    outline: none;
    border: none;
    font-size: 1.3em;
    width: 100px;
    font-weight: 600;
    
    &:focus {
        background: none;
        border: none;
        border-bottom: 4px solid #d9d9d9;
    }
`

const icons = {
    'Accomodation': faBed,
    'Travel': faPlane,
    'Entertainment': faFilm,
    'Food': faBurger,
    'Shopping': faBagShopping,
    'Transportation': faBus,
    'Other': faTag,
    'Total': faCoins
}


function BudgetBlock(props) {
    const [trip, setTrip] = useState(props.trip);
    const [item, setItem] = useState(props.item);
    const [limit, setLimit] = useState(0);
    const [accepetedOver, setAcceptedOver] = useState(false);

    useEffect(() => {
        console.log(props);
        setTrip(props.trip);
        console.log(props.item);
        setItem(props.item);

        setLimit(props.item.limit);
        
    }, [props.trip, props.item])

    function calcTotal() {
        var total = 0;
        Object.keys(item.content).forEach(function(c) {
            total += item.content[c];
        });

        console.log(total)
        return total;
    }

    function handleChange(e) {
        const name = e.target.getAttribute('name');
        const value = e.target.value;
        const prevTotal = calcTotal();
      
        if (/^\$\d*$/.test(value)) {
            console.log('targert')
            console.log(e.target.getAttribute('name'));
            console.log(item.content);
            var newVal = parseInt(e.target.value.substring(1))
            if (!newVal) {
                newVal = 0;
            }

            if (newVal <= 9999) {
                setItem(prevState => ({
                    ...prevState,
                    content: {
                      ...prevState.content,
                      [e.target.getAttribute('name')]: newVal
                    }
                }));
    
                // Warning if user is over budget
                if (!accepetedOver) {
                    console.log('okok')
                    var total = 0;
                    Object.keys(item.content).forEach(function(c) {
                        if (c !== e.target.getAttribute('name')) {
                            total += item.content[c];
                        }
                    });
    
                    total += newVal;
                    if (total > limit && total > prevTotal) {
                        setAcceptedOver(true);
                    }
                }
            }

        }
    }

    function handleLimitChange(e) {
        const value = e.target.value;
      
        if (/^\$\d*$/.test(value)) {
            var newVal = parseInt(e.target.value.substring(1));
            if (!newVal) {
                newVal = 0;
            }
            if (newVal <= 999999) {
                setLimit(newVal)
            }
        }
    }

    async function limitSave(e) {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);
        var currentTrip = docSnap.data();
        var newBlocks = [];
        var newLink;
        var newContent = [];
        
        for (let i = 0; i < currentTrip.blocks.length; i++) {
            console.log(item.created)
            if (currentTrip.blocks[i].created !== item.created) {
                newBlocks.push(currentTrip.blocks[i]);
            } else {
                currentTrip.blocks[i].limit = limit;
                newBlocks.push(currentTrip.blocks[i])
            }
        }

        await updateDoc(tripRef, {blocks: currentTrip.blocks}).catch((error) => console.log(error.message));
    }
    
    async function budgetItemSave(e, category) {
        const tripRef = doc(db, "trips", props.id);
        const docSnap = await getDoc(tripRef);
        var currentTrip = docSnap.data();
        var newBlocks = [];
        var newLink;
        var newContent = [];
        
        for (let i = 0; i < currentTrip.blocks.length; i++) {
            console.log(item.created)
            if (currentTrip.blocks[i].created !== item.created) {
                newBlocks.push(currentTrip.blocks[i]);
            } else {
                currentTrip.blocks[i].content[category] = item.content[category]
                newBlocks.push(currentTrip.blocks[i])
            }
        }

        await updateDoc(tripRef, {blocks: currentTrip.blocks}).catch((error) => console.log(error.message));
    }


    return (
        <BlockContainer>
            <Limit>
                <LimitTitle>Spending limit: </LimitTitle>
                <LimitInput onBlur={limitSave} onChange={handleLimitChange} value={`$${limit}`} type='text'/>
                <Progress total={limit} current={calcTotal()}/>
            </Limit>
            { typeof item.content === 'object' && item.content !== null ?
                <Categories>
                    {
                        Object.keys(item.content).map((category, index) => {
                            console.log(item.content[category])
                            return (
                                <Category key={`budget-${index}`}>
                                    <CategoryIcon icon={icons[category]}/>
                                    <CategoryTitle>{category}</CategoryTitle>
                                    <CategoryInput onBlur={(e) => budgetItemSave(e, category)} autoComplete="off" value={`$${item.content[category]}`} name={category} onChange={handleChange} placeholder='$0' type="text" />
                                </Category>
                            )
                        })
                    }
                    <Category>
                        <CategoryIcon icon={icons['Total']}/>
                        <CategoryTitle>Total</CategoryTitle>
                        <TotalAmount>${calcTotal()}</TotalAmount>
                    </Category>
                </Categories>
            :
                <></>
            }
        </BlockContainer>
    );
}

export default BudgetBlock;
