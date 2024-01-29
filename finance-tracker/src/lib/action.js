"use server"
import axios from "axios";

export async function submitTransactionForm(prevstate, formdata) {
    try {
        const { date, category, amount, description } = Object.fromEntries(formdata);
      
        const response = await axios.post('http://localhost:8080/api/add-transaction', { date, category, amount, description });
        return { ...prevstate, success: true, status: Object.keys(response.data)[0] };
    } catch (error) {
        console.log(error.response.data);
        return { ...prevstate, success: false, status: error.response.data };
    }


}





