import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

function Insight() {
    const [insights, setInsights] = useState([{
        name: "New Visitor",
        numbers: "57,820",
        percentage: 88,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16">
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        </svg>
    },{
        name: "Purchase",
        numbers: "89,775",
        percentage: 68,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-currency-dollar" viewBox="0 0 16 16">
        <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
        </svg>
    },{
        name: "Active Users",
        numbers: "178,391",
        percentage: 76,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
        </svg>
    },{
        name: "Returned",
        numbers: "32,592",
        percentage: 58,
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
        </svg>
    }]);

    function reArrangeArray(result) {
        const { destination, source } = result;
        if (!destination) {
          return;
        }
        if (
          destination.droppableId === source.droppableId &&
          destination.index === source.index
        ) {
          return;
        }
    
        const sourceElement = insights[source.index];
        insights.splice(source.index, 1);
        insights.splice(destination.index, 0, sourceElement);
        setInsights(insights);
      }

      const getListStyle = (isDraggingOver) => ({
        border: isDraggingOver ? "2px dotted lightblue" : "",
      });

    return (
        <>
            <div>
                <DragDropContext onDragEnd={(result) => {reArrangeArray(result)}}>  
                    <Droppable droppableId="droppable">
                        {(provided, snapshot) => (
                            <div {...provided.droppableProps} ref={provided.innerRef} style={getListStyle(snapshot.isDraggingOver)}  className="d-flex flex-row justify-content-between align-items-center">
                                {insights.map((insight, index) => {
                                    return (
                                        <Draggable key={index} draggableId={"draggable-" + index} index={index}>
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <div className="px-2 bg-white d-flex align-items-center shadow-sm" draggableId={index}>
                                                        <div className="pb-2">
                                                            <Doughnut data={{
                                                                datasets:[{
                                                                    data: [insight.percentage, (100-insight.percentage)],
                                                                    backgroundColor: [
                                                                        '#DBDBDB',
                                                                        '#FFFFFF',
                                                                    ],
                                                                    borderColor: [
                                                                        '#DBDBDB',
                                                                        '#FFFFFF',
                                                                    ],
                                                                    borderWidth: 1,
                                                                }]
                                                            }} />
                                                        </div>
                                                        <div className="ps-2 pe-4"><span>{insight.name}</span><br/><span>{insight.numbers}</span></div>
                                                        <div className="px-2" style={{"color":"#DBDBDB"}}>{insight.icon}</div>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    )
                                })}
                            </div>
                        )}
                    </Droppable>  
                </DragDropContext>
            </div>
        </>
    )
}

export default Insight;