import PrevButton from '@/Components/PrevButton';
import React from 'react';

const getTransactions = async () => {
    try {
        const response = await fetch('http://localhost:8080/api/transactions', { cache: 'no-store' });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data); 
        return data;
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        throw error; 
    }
};

async function Page() {
    let transactions = await getTransactions();

    return (
        <div className="w-full overflow-x-auto rounded-xl border shadow">
            <PrevButton/>
            <table className="w-full border-collapse">
                <thead className="border-b">
                    <tr>
                        <th className="py-4 text-sm font-medium text-center text-gray-500 px-3 md:px-6">Amount</th>
                        <th className="py-4 text-sm font-medium text-center text-gray-500 px-3 md:px-6">Date</th>
                        <th className="py-4 text-sm font-medium text-center text-gray-500 px-3 md:px-6">Category</th>
                        <th className="py-4 text-sm font-medium text-center text-gray-500 px-3 md:px-6">Details</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction, index) => (
                        <tr key={index}>
                            <td className="py-4 text-xs font-bold text-center text-red-700 px-3 md:px-6">
                                -${transaction.amount}
                            </td>
                            <td className="py-4 text-xs font-normal text-center text-gray-500 px-3 md:px-6 whitespace-nowrap">
                                {new Date(transaction.date).toLocaleDateString()}
                            </td>
                            <td className="py-4 text-xs text-center text-gray-600 px-3 md:px-6 whitespace-nowrap">
                                {transaction.category}
                            </td>
                            <td className="py-4 text-xs text-center text-gray-600 px-3 md:px-6 md:w-48 lg:w-2/3 whitespace-normal">
                                {transaction.description}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Page;
