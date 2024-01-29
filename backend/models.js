const mongoose = require("mongoose");
const Schema = mongoose.Schema;




const Transaction = new Schema(
    {
        // postId: { type: Schema.Types.ObjectId , required: true },
        amount: { type: Number, required: [true,'Amount cannot be empty'] },
        description: { type: String, required: [true,'Description cannot be empty'] },
        date: { type: Date,  required: [true,'Date cannot be empty'] },
        category:{type:String, required:[true,'Category cannot be empty']  }
    },
    
    { timestamps: true }
);


const Transactions = mongoose.model("Transaction", Transaction)

module.exports = Transactions;