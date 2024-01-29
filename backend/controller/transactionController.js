const Transactions=require('../models')

exports.addTransaction = async (req, res) => {
    try {            // return res.status(400).json({ haha: error });

        const { amount, description, category, date } = req.body;
        const newTransaction = new Transactions({ amount, description, category, date });
        
       
        const savedTransaction = await newTransaction.save();
        return res.status(200).json({ "Transaction added successfully": savedTransaction });
    } catch (error) {
        console.error(error);
        if (error.name === 'ValidationError') {
            // Mongoose validation error
            const validationErrors = Object.entries(error.errors).map(([name, errorObject]) => ({
                [name]: errorObject.message,
            }));            
            
            return res.status(400).json({  errors: validationErrors });

        }
        else{
            return res.status(500).json({  error: "Internal Server Error" });
        }
    }
};


exports.getTransactions=async(req,res)=>{
    try{
        const transactions=await Transactions.find().sort({ date: -1 });;
        return res.status(200).json(transactions);
    }catch(error){
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"});
    }
}
