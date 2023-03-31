import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import EmojiImg from '../EmojiImg';


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

`

function ExploreFilter() {
  const [filters, setFilters] = useState(
    {
      "Destination type": [
      {
        title: "Beach vacation",
        emoji: "🏖️",
        value: "type-beach"
      },
      {
        title: "City trip",
        emoji: "🏙️",
        value: "type-city"
      },
      {
        title: "Nature adventure",
        emoji: "⛰️",
        value: "type-nature"
      },
      {
        title: "Winter vacation",
        emoji: "❄️",
        value: "type-winter"
      },],
      "Society": [
      {
        title: "Architecture",
        emoji: "🏛️",
        value: "society-architecture"
      },
      {
        title: "Sightseeing",
        emoji: "🗽",
        value: "society-sightseeing"
      },
      {
        title: "Museums",
        emoji: "🏺",
        value: "society-museums"
      },
      {
        title: "Culinary",
        emoji: "🍔",
        value: "society-culinary"
      },
      {
        title: "Sports",
        emoji: "⚽️",
        value: "society-sports"
      },
      {
        title: "Night life",
        emoji: "🍺",
        value: "society-night"
      },
      {
        title: "Kid friendly",
        emoji: "👶",
        value: "society-kid"
      }],
      "Location": [
      {
        title: "Europe",
        emoji: "🌍",
        value: "location-europe"
      },
      {
        title: "Africa",
        emoji: "🌍",
        value: "location-africa"
      },
      {
        title: "America",
        emoji: "🌎",
        value: "location-america"
      },
      {
        title: "Asia/Oceania",
        emoji: "🌏",
        value: "location-asiaoceania"
      },
      {
        title: "Other",
        emoji: "🌕",
        value: "location-other"
      }]
    }
  );

  const [ triggerState, setTriggerState ] = useState(false);
 
  return (
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
                          <ExploreCheckbox onChange={() => setTriggerState(!triggerState)} id={filter.value} type="checkbox" value={filter.value}/>
                          <CheckboxLabel><EmojiImg emoji={filter.emoji}/> {filter.title}</CheckboxLabel>
                        </CheckboxContainer>
                    ))}
                  </SectionItems>
                </FilterSection>
              )
            })
          }
        </ExploreForm>
        <FiltersExpand>Filters</FiltersExpand>
      </ExploreFilterContainer>
  );
}

export default ExploreFilter;
