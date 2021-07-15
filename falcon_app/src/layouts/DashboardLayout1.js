import React from 'react'
import Accordion from '../components/common/accordion/Accordion';
const Dashboard = () => {
  const accordionArray = [
    {title: "Hello1", description: "This is the example contents.", open : true},
    {title: "Hello2", description: "This is the example contents.", open : false},
    {title: "Hello3", description: "This is the example contents.", open : false}
  ];
  return (
    <div>
      {accordionArray.map((item, index) => 
        <Accordion key={index} title={item.title} description={item.description} open={item.open} />
      )}
    </div>
  )
}

export default Dashboard
