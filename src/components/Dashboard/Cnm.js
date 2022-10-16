import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import World from "../img/world.png";

ChartJS.register(ArcElement, Tooltip, Legend);

function Cnm() {
  return (
    <>
        <div className='my-4 d-flex justify-content-between align-items-center'>
            <div className='p-4 bg-white shadow-sm' style={{"width": "25%"}}>
                <Doughnut
                    data={{
                        labels: ['Ad Cmpaigns', 'Other', 'Direct Traffic', 'Refferal Traffic', 'Serach Engines'],
                        datasets: [
                            {
                            label: 'All in %',
                            data: [17, 87, 38, 70, 22],
                            backgroundColor: [
                                '#A0F39F',
                                '#00C5B6',
                                '#3ABA85',
                                '#008275',
                                '#005563',
                            ],
                            borderColor: [
                                '#A0F39F',
                                '#00C5B6',
                                '#3ABA85',
                                '#008275',
                                '#005563',
                            ],
                            borderWidth: 1,
                            },
                        ],
                    }}
                    options= {{
                        plugins: {
                            legend: {
                                position: "right",
                            }
                        }
                    }}
                />
            </div>
            <div className='p-4 bg-white shadow-sm' style={{"width": "25%"}}>
                <Doughnut
                    data={{
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                        datasets: [
                            {
                            label: 'All in %',
                            data: [73, 87, 71, 65, 71, 76],
                            backgroundColor: [
                                '#008275',
                                '#00C5B6',
                                '#A0F39F',
                                '#3ABA85',
                                '#005563',
                                '#3ABA85',
                            ],
                            borderColor: [
                                '#008275',
                                '#00C5B6',
                                '#A0F39F',
                                '#3ABA85',
                                '#005563',
                                '#3ABA85',
                            ],
                            borderWidth: 1,
                            },
                        ],
                    }}
                    options= {{
                        plugins: {
                            legend: {
                                position: "left",
                            }
                        }
                    }}
                />
            </div>
            <div className='p-4 bg-white shadow-sm'><img src={World} alt="World" width={592}/></div>
        </div>
    </>
  )
}

export default Cnm