// TransactionForm.js
"use client"
import { submitTransactionForm } from '@/lib/action';
import React, { useEffect } from 'react';
import {useFormState} from 'react-dom'
import { useRef,useState } from 'react';
import { useRouter } from 'next/navigation';
function TransactionForm() {
  const router=useRouter()
  const[state,formAction] =useFormState(submitTransactionForm,{success:false,status:null})
  const formRef=useRef()
const categories = [
 
  'Shopping',
  'Entertainment',
  'Healthcare',
  'Food',
  'Travel',
  'Tax/Recharge'
];
  useEffect(()=>{
 if(state.success){
        
        formRef.current.reset()
        router.push('/')
        router.refresh()
      }
  },[state,router])


  return (
    <form ref={formRef} className=" mx-auto w-[70%]   m-auto mt-8"  action={formAction} >
      <div className="mb-4">
        <label htmlFor="description" className=" text-gray-700 text-sm font-bold mb-2">
          Description
        </label>
        <input
          type="text"
          name='description'
          id="description"
          className="w-full p-2 border rounded-md"
          required
        />
      </div>
  

      <div className="mb-4">
        <label htmlFor="amount" className=" text-gray-700 text-sm font-bold mb-2">
          Amount
        </label>
        <input
          type="number"
          name='amount'
          id="amount"
          className="w-full p-2 border rounded-md"
         
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="category" className=" text-gray-700 text-sm font-bold mb-2">
          Category
        </label>
        <select
          name='category'
          id="category"
          className="w-full p-2 border rounded-md"
         
          required
        >
          {categories.map((category,index) =>(
            <option value={category} key={index}>{category}</option>
          ))}
        
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="date" className=" text-gray-700 text-sm font-bold mb-2">
          Date
        </label>
        <input
        name='date'
          type="date"
          id="date"
          className="w-full p-2 border rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
