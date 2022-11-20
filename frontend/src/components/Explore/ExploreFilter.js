import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';


const ExploreFilterContainer = styled.div`
    width: 280px;
    height: calc(100vh - 140px);
    /* background-color: tomato; */
    position: fixed;
    right: 15px;
    bottom: 15px;
    border-radius: 15px;
    -webkit-box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.17); 
    box-shadow: 5px 5px 12px 5px rgba(0,0,0,0.17);
    font-family: 'Sen', sans-serif;
    overflow-y: scroll;
`

const ExploreForm = styled.form`
  padding: 0px 15px;
  @media(max-width: 991px) {
      display: none;
    }
`

const CheckboxContainer = styled.div`
  margin: 10px;
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
    dipslay: block;
  }
`

function ExploreFilter() {
  const [filters, setFilters] = useState(
    [
      "Destination type",
      {
        title: "🏖 Beach vacation",
        value: "type-beach"
      },
      {
        title: "🏙 City trip",
        value: "type-city"
      },
      {
        title: "🏔 Nature adventure",
        value: "type-nature"
      },
      {
        title: "❄️ Winter vacation",
        value: "type-winter"
      },
      "Society",
      {
        title: "🏛 Architecture",
        value: "society-architecture"
      },
      {
        title: "🗽 Sightseeing",
        value: "society-sightseeing"
      },
      {
        title: "🏺 Museums",
        value: "society-museums"
      },
      {
        title: "🍔 Culinary",
        value: "society-culinary"
      },
      {
        title: "⚽️ Sports",
        value: "society-sports"
      },
      {
        title: "🍺 Night life",
        value: "society-night"
      },
      {
        title: "👶 Kid friendly",
        value: "society-kid"
      },
      "Location",
      {
        title: "🌍 Europe",
        value: "location-europe"
      },
      {
        title: "🌍 Africa",
        value: "location-africa"
      },
      {
        title: "🌎 North/South America",
        value: "location-america"
      },
      {
        title: "🌏 Asia/Oceania",
        value: "location-asiaoceania"
      },
      {
        title: "🌕 Other",
        value: "location-other"
      },
    ]
  );

  return (
      <ExploreFilterContainer>
        <ExploreForm>
          {filters.map((filter) => (
            typeof filter == "string" ? <SectionLabel>{filter}</SectionLabel> :
            <CheckboxContainer>
              <ExploreCheckbox type="checkbox" value={filter.value}/>
              <CheckboxLabel>{filter.title}</CheckboxLabel>
            </CheckboxContainer>
          ))}
        </ExploreForm>
        <FiltersExpand>Filters</FiltersExpand>
      </ExploreFilterContainer>
  );
}

export default ExploreFilter;
