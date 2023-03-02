import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import 'chart.js/auto';
import { Doughnut, Pie } from 'react-chartjs-2';

const GraphContainer = styled.div`
    font-family: "Sen", sans-serif;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
`

const options = {
    plugins: {
        tooltip: {
            callbacks: {
                label: function(context) {
                    console.log(context)
                    return ` $${context.formattedValue}`;
                }
            }
        }
    }
}

function BudgetGraphComponent(props) {
    const [budget, setBudget] = useState(props.budget);
    const [ data, setData] = useState(null);

    useEffect(() => {
        setBudget(props.budget);
        
        let dataAmounts = []
        let dataLabels = []

        budget.forEach(element => {
            dataAmounts.push(element.amount)
            dataLabels.push(element.label)
        });

        setData({
            datasets: [{
                data: dataAmounts,
                backgroundColor: [
                    '#1746A2',
                    '#757687',
                    '#980C2F',
                    '#D54E5C',
                    '#75B0AD',
                    '#FFF7D6'
                ],
            }],
        
            // These labels appear in the legend and in the tooltips when hovering different arcs
            labels: dataLabels
        });
        
    }, [props.budget])

  return (
    data ?
        <GraphContainer>
            <Doughnut
                options={options}
                data={data}
            />
        </GraphContainer>
    :
        <></>
    );
}

export default BudgetGraphComponent;