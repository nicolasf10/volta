import React from 'react';
import styled from 'styled-components';

const ActivityWrapper = styled.div`
  margin-left: 20px;
  margin-bottom: 10px;
`;

const ActivityTitle = styled.h3`
  margin: 0;
`;

const ActivityDescription = styled.p`
  margin: 5px 0;
`;

const Activity = ({ activity }) => {
  return (
    <ActivityWrapper>
      <ActivityTitle>{activity.title}</ActivityTitle>
      <ActivityDescription>{activity.description}</ActivityDescription>
    </ActivityWrapper>
  );
};

export default Activity;
