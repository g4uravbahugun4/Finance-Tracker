"use client"
import React, { useState } from 'react'
import PieChart from './PieChart'



function Dashboard({transactions}) {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());


  const months = [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  // Create an array of years (you can adjust the range based on your requirements)
  const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);

  const handleMonthChange = (e) => {
    setSelectedMonth(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };


   const filteredData = transactions.filter((item) => {
    const transactionDate = new Date(item.date);
    return transactionDate.getMonth() + 1 == selectedMonth && transactionDate.getFullYear() ==selectedYear;
  });

let totalSpending = filteredData.reduce((sum, item) => {
  return sum + item.amount;
}, 0);
  return (
    <div className=" w-full bg-slate-200">

    
    <div className="flex justify-evenly    shadow-slate-700 shadow-sm">
      <div className="flex flex-col gap-3  items-center mb-3 ">
        <h1 className="md:text-3xl text-xl font-bold">Total Spendings:</h1>
        <h1 className="md:text-2xl text-lg  rounded-md px-3 text-red-600 font-bold">${totalSpending}</h1>
      </div>
      <div className="flex flex-col gap-3  items-center">
        <h1 className="md:text-3xl text-xl font-bold">Timeline:</h1>
        <div className='flex  md:flex-row p-2 flex-col gap-1'>
        <select value={selectedMonth} onChange={handleMonthChange} className="text-sm bg-white rounded-md px-3 py-1 text-gray-700">
        <option value="" disabled>Select Month</option>
        {months.map((month, index) => (
          <option key={index} value={index + 1}>
            {month}
          </option>
        ))}
      </select>

      <select value={selectedYear} onChange={handleYearChange} className="text-base bg-white rounded-md px-3 py-1 text-gray-700">
        <option value="" disabled>Select Year</option>
        {years.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
      </div>
      </div>
    </div>

      
    <PieChart month={selectedMonth} year={selectedYear} data={transactions}/>


   </div>
  )
}

export default Dashboard

