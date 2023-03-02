import React from 'react';
import Activity from './Activity';
import styled from 'styled-components';

const StyledDay = styled.div`
  border-top: 1px solid #ddd;
  padding: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    background-color: #eee;
  }

  & .fa-chevron-up,
  & .fa-chevron-down {
    font-size: 16px;
    margin-left: 10px;
    transition: all 0.3s ease-in-out;
  }

  & .fa-chevron-up {
    transform: rotate(180deg);
  }

  &.active .fa-chevron-up,
  &:not(.active) .fa-chevron-down {
    transform: rotate(0deg);
  }
`;

const Activities = styled.div`
  margin-left: 20px;
`;

const Day = ({ day, index, activeIndex, onTitleClick }) => {
  const isActive = index === activeIndex;

  return (
    <StyledDay>
      <Title className={isActive ? 'active' : ''} onClick={() => onTitleClick(index)}>
        <h2>{day.date}</h2>
        <i className={`fa fas ${isActive ? 'fa-chevron-up' : 'fa-chevron-down'}`} />
      </Title>
      {isActive && (
        <Activities>
          {day.activities.map((activity, index) => (
            <Activity key={index} activity={activity} />
          ))}
        </Activities>
      )}
    </StyledDay>
  );
};

export default Day;
