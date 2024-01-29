"use client"
import React from 'react'
import 'chart.js/auto';
import {  Pie } from 'react-chartjs-2';
function PieChart({data,month,year}) {
  
  const filteredData = data.filter((item) => {
    const transactionDate = new Date(item.date);
    console.log("transactionDate", transactionDate.getFullYear()  )
    console.log("month",month)
    return transactionDate.getMonth() + 1 == month && transactionDate.getFullYear() ==year;
  });
  console.log(filteredData,"filteredData")

const groupedData = filteredData.reduce((acc, item) => {
  const { category, amount } = item;

  if (!acc[category]) {
    acc[category] = { category, totalAmount: amount };
  } else {
    acc[category].totalAmount += amount;
  }

  return acc;
}, {});

const result = Object.values(groupedData);
console.log(result)
const category=result.map((item) => item.category)
const totalAmount = result.map((item) => item.totalAmount)

const dataChart = {
  labels: category,
  datasets: [
    {
      label: 'Amount Spended',
      data: totalAmount,
      backgroundColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderColor: [
        'rgba(255, 109, 142, 1)',
        'rgba(54, 172, 245, 1)',
        'rgba(255, 216, 96, 1)',
        'rgba(75, 212, 212, 1)',
        'rgba(153, 112, 265, 1)',
        'rgba(255, 169, 74, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

       
  return (
     <div className=' mt-5 m-auto blcok  '>
      <h1 className='font-sans md:text-5xl text-3xl text-center'>Your Finance Distribution</h1>
     <div className='md:w-[50%] p-4 w-[80%] md:m-auto m-auto mt-4'>
      <Pie redraw={true} data={dataChart}/>
      </div>
    </div>
  )
}

export default PieChart