import React, { useState, useEffect } from 'react';
import { Tab } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import BudgetComponent from './BudgetComponent';
import BudgetGraphComponent from './BudgetGraphComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoins } from '@fortawesome/free-solid-svg-icons';

const PageContainer = styled.div`
    width: 100vw;
    padding-top: 40px;
`

const BudgetMain = styled.div`
    padding: 20px;
    margin-bottom: 20px;
`

const BudgetGraph = styled.div`
    margin-bottom: 20px;
`

const ItemLabel = styled.h5`
    margin: 0px;
`

const ItemAmount = styled.h6`
    margin: 0px;
`

const BudgetInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-bottom: 1px solid var(--darkBlue);
  }
`;

const BudgetButton = styled.button`
  background-color: var(--darkBlue);
  font-family: "Sen", sans-serif;
  font-weight: 550;
  color: white;
  border: none;
  border-radius: 10px;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: #757687;
  }
`;

const BudgetTable = styled.table`
    font-family: "Sen", sans-serif;
    width: 100%;
    margin: 0px;
`

const TableHead = styled.th``

const TableRow = styled.tr`
    &:nth-child(even) {
    background-color: #dddddd;
    }
`

const TableData = styled.td`
    border: 1px solid #dddddd;
    text-align: left;
    padding: 12px 8px;
`

const AddRow = styled.tr``

function TripBudget(props) {
    const [trip, setTrip] = useState({...props.trip});
    const [budgetName, setBudgetName] = useState('');
    const [budgetAmount, setBudgetAmount] = useState('');
    const [sum, setSum] = useState(0)

    useEffect(() => {
        console.log(trip);
        setTrip(props.trip);
        let s = 0;
        props.trip.budget.forEach(element => {
            s += element.amount;
        });
        setSum(s);
    }, [props.trip])

  return (
    trip ?
        // <BudgetComponent/>
        <PageContainer>
            <div className="container">
                <div className="row">
                    <BudgetMain className="col-lg-6 col-md-12">
                        <BudgetTable>
                            {/* <TableHead>
                                <TableData>Label</TableData>
                                <TableData>Amount</TableData>
                            </TableHead> */}
                            {trip.budget.map((item, index) => (
                                <TableRow>
                                    <TableData><ItemLabel>{item.label}</ItemLabel></TableData>
                                    <TableData><ItemAmount>${item.amount}</ItemAmount></TableData>
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableData><ItemLabel><b>Total</b></ItemLabel></TableData>
                                <TableData><ItemAmount><b>${`${sum}`}</b></ItemAmount></TableData>
                            </TableRow>
                            <AddRow>
                                <TableData>
                                    <BudgetInput
                                    type="text"
                                    placeholder="Item name"
                                    value={budgetName}
                                    onChange={(e) => setBudgetName(e.target.value)}
                                    />
                                </TableData>
                                <TableData>
                                    <BudgetInput
                                    type="number"
                                    placeholder="Amount"
                                    value={budgetAmount}
                                    onChange={(e) => setBudgetAmount(e.target.value)}
                                    />
                                </TableData>
                            </AddRow>
                        </BudgetTable>
                        <BudgetButton><FontAwesomeIcon icon={faCoins}/> Add Item</BudgetButton>
                    </BudgetMain>
                    <BudgetGraph className="col-lg-6 col-md-12">
                        <BudgetGraphComponent budget={trip.budget} />
                    </BudgetGraph>
                </div>
            </div>
        </PageContainer>
    :
        <></>
    );
}

export default TripBudget;