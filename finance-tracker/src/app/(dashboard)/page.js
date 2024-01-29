import Dashboard from "@/Components/Dashboard";


const getTransactions = async () => {
  
  try {
    const response = await fetch('http://localhost:8080/api/transactions', { cache: 'no-store' });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error fetching transactions:', error.message);
    throw error; 
  }
};


export default async function page() {
let transactions=await getTransactions()

  return (
   <Dashboard transactions={transactions} />
  );
}
