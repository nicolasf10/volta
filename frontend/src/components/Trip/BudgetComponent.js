import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js';

const StyledBudget = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 20px;
`;

const BudgetHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  /* background-color: #f5f5f5; */
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h2`
  margin: 0;
  font-family: "Lora", serif;
`;

const BudgetTotal = styled.span`
  font-size: 24px;
`;

const BudgetInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  margin-bottom: 10px;

  &:focus {
    outline: none;
    border-bottom: 1px solid #008cba;
  }
`;

const BudgetButton = styled.button`
  background-color: #008cba;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #006d8c;
  }
`;

const BudgetList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const BudgetItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const BudgetName = styled.span`
  flex: 1;
`;

const BudgetAmount = styled.span`
  font-weight: bold;
`;

const BudgetGraph = styled.canvas`
  margin-top: 20px;
`;

// const BudgetBreakdown = styled.div`

// `

const BudgetComponent = () => {
  const [budgetItems, setBudgetItems] = useState([]);
  const [budgetName, setBudgetName] = useState('');
  const [budgetAmount, setBudgetAmount] = useState('');
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    if (budgetItems.length) {
      const labels = budgetItems.map(item => item.name);
      const data = budgetItems.map(item => item.amount);
        const colors = [ "#000" ]
    //   const colors = generateColors(budgetItems.length);

      const newChartData = {
        labels,
        datasets: [
          {
            data,
            backgroundColor: colors,
          },
        ],
      };

      setChartData(newChartData);
    }
  }, [budgetItems]);

  const handleAddItem = () => {
    if (budgetName && budgetAmount) {
      const newItem = {
        name: budgetName,
        amount: Number(budgetAmount),
      };

      setBudgetItems([...budgetItems, newItem]);
      setBudgetName('');
      setBudgetAmount('');
    }
  };

  const handleDeleteItem = (index) => {
    const newBudgetItems = [...budgetItems];
    newBudgetItems.splice(index, 1);
    setBudgetItems(newBudgetItems);
  };

  const budgetTotal = budgetItems.reduce((total, item) => total + item.amount, 0);

  return (
    <StyledBudget>
      <BudgetHeader>
        <Title>Total</Title>
        <BudgetTotal>${budgetTotal.toFixed(2)}</BudgetTotal>
      </BudgetHeader>
      <div className="container">
      <div>
        <BudgetInput
          type="text"
          placeholder="Item name"
          value={budgetName}
          onChange={(e) => setBudgetName(e.target.value)}
        />
        <BudgetInput
          type="number"
          placeholder="Amount"
          value={budgetAmount}
          onChange={(e) => setBudgetAmount(e.target.value)}
        />
        <BudgetButton onClick={handleAddItem}>Add Item</BudgetButton>
      </div>
      </div>
      <BudgetList>
        {budgetItems.map((item, index) => (
          <BudgetItem key={index}>
            <BudgetName>{item.name}</BudgetName>
            <BudgetAmount>${item.amount.toFixed(2)}</BudgetAmount>
            <BudgetButton onClick={() => handleDeleteItem(index)}>Delete</BudgetButton>
          </BudgetItem>
        ))}
      </BudgetList>
      {/* <BudgetBreakdown>
        <Title>Budget Breakdown</Title>
        <BudgetChart>
          {budgetItems.map((item, index) => (
            <BudgetBar key={index} percentage={(item.amount / budgetTotal) * 100}>
              <BudgetBarLabel>{item.name}</BudgetBarLabel>
            </BudgetBar>
          ))}
        </BudgetChart>
      </BudgetBreakdown> */}
    </StyledBudget>
  );
}

export default BudgetComponent;