import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EmojiImg from '../components/EmojiImg';
import ExploreDestinations from '../components/Explore/ExploreDestinations';
import ExploreFilter from '../components/Explore/ExploreFilter';
import ExploreFilterValues from '../components/Explore/ExploreFilterValues';
import ExploreSearch from '../components/Explore/ExploreSearch';
import NavbarComponent from '../components/Navbar';
import destinations from './ExploreData';


const ExplorePage = styled.div`
  min-height: 100vh;
`

const ExplorePageContainer = styled.div`
  padding: 30px 30px 0px 30px;
  position: relative;
  height: inherit;
  /* background-color: lightblue; */
`

const ExploreHeading = styled.h1`
  font-family: 'Lora', serif;
  font-weight: 700;
  opacity: 1;
  display: inline;
  margin: 0px;
`

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: row;

`

const NewTripButton = styled.button`
  font-size: 1.1rem;
  border-radius: 7px;
  padding: 7.5px 15px;
  font-family: "Sen", sans-serif;
  color: #fff;
  border: none;
  background-color: #1746A2;
  transition: all 0.2s ease;
  outline: 1px solid var(--darkBlue);
  height: 40px;
  margin-left: 50px;
  margin-top: auto;
  margin-bottom: auto;

  &:hover {
      background-color: transparent;
      color: var(--darkBlue);
  }

  &:focus {
      background-color: transparent ;
      color: var(--darkBlue);
      border: 1px solid var(--darkBlue);
  }
`

const ExploreContent = styled.div`
  display: flex;
  flex-direction: row-reverse;

  @media screen and (max-width: 1200px) {
    flex-direction: column;
  }  
`


// Filter style
const ExploreFilterContainer = styled.div`
    width: 280px;
    /* posit/ion: relative; */
    margin-top: -50px;
    margin-left: 20px;
    height: calc(100vh - 140px);
    /* background-color: tomato; */
    /* position: fixed; */
    /* right: 15px;
    bottom: 15px; */
    border-radius: 15px;
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.17); 
    box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.17);
    font-family: 'Sen', sans-serif;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 1200px) {
      margin-top: 20px;
      margin-left: 0px;
      width: 100%;
      height: auto;
    }
`

const ExploreForm = styled.form`
  padding: 0px 15px;
  @media(max-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 20px 0px;
    height: auto;
  }
`

const CheckboxContainer = styled.div`
  margin: 10px;
`

const SectionItems = styled.div`
  display: flex;
  flex-direction: column;
`

const ExploreCheckbox = styled.input`
    margin-right: 11px;
    transform: scale(1.4);
`

const CheckboxLabel = styled.label`

`

const SectionLabel = styled.p`
  color: #505050;
  font-size: 1em;
  text-transform: uppercase;
  font-weight: 600;
  margin-top: 15px;
`

const FiltersExpand = styled.button`
  display: none;

  @media(max-width: 991px) {
    display: block;
  }
`

const FilterSection = styled.div`
  margin: 0px 15px;
`
// End of filter style


// Function to check if set2 is subset of set1
function subset(set1, set2) {
  let isSubset = true;
  for (let item of set1) {
    if (!set2.has(item)) {
      isSubset = false;
      break;
    }
  }
  return isSubset;
}

function Explore() {

  const [ destinationsFilter, setDestinations ] = useState(destinations);
  const [filters, setFilters] = useState(ExploreFilterValues);
  const [ triggerState, setTriggerState ] = useState(false);


  useEffect(() => {
    // getting a list of all selected filters
    var selectedFilters = []
    var allFilters = Array.prototype.slice.call(document.getElementsByClassName('filter-checkbox'));
    
    allFilters.map((item, index) => {
      if (item.checked) {
        selectedFilters.push(item.value);
      }
    })

    if (selectedFilters.length == 0) {
      setDestinations(destinations)
    } else {
      var newDestinations = [];
      var filtersSet = new Set(selectedFilters)
      console.log(filtersSet)
      destinations.map((item, index) => {
        console.log(new Set(item.tags))
        if (subset(filtersSet, new Set(item.tags))) {
          newDestinations.push(item)
        }
      })

      setDestinations(newDestinations);
    }

    console.log('trigger')
  }, [triggerState])

  useEffect(() => {
    document.title = `Explore`
  }, [])

  return (
      <ExplorePage>
        <NavbarComponent active='explore' />
        <ExplorePageContainer>
          <HeadingContainer>
            <ExploreHeading>Explore <EmojiImg size="45px" emoji="🧭"/></ExploreHeading>
            {/* <NewTripButton>New Template</NewTripButton> */}
          </HeadingContainer>
          <ExploreContent>
            <ExploreFilterContainer>
              <ExploreForm>
                {
                  Object.keys(filters).map((key, index) =>  {
                    return (
                      <FilterSection key={index}>
                        <SectionLabel>{key}</SectionLabel>
                        <SectionItems>
                          {filters[key].map((filter, index2) => (
                              <CheckboxContainer key={index2}>
                                <ExploreCheckbox className='filter-checkbox' onChange={() => setTriggerState(!triggerState)} id={filter.value} type="checkbox" value={filter.value}/>
                                <CheckboxLabel><EmojiImg emoji={filter.emoji}/> {filter.title}</CheckboxLabel>
                              </CheckboxContainer>
                          ))}
                        </SectionItems>
                      </FilterSection>
                    )
                  })
                }
              </ExploreForm>
              {/* <FiltersExpand>Filters</FiltersExpand> */}
            </ExploreFilterContainer>
            <ExploreDestinations destinations={destinationsFilter}/>
          </ExploreContent>
        </ExplorePageContainer>
        
        {/* <ExploreSearch/> */}
        
        
        {/* <div className="container">
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-9"></div>
          </div>
        </div> */}
      </ExplorePage>
  );
}

export default Explore;
