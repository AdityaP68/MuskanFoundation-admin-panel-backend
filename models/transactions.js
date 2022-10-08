const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  //ref number
  transactionNumber: {
    type: String,
    validate: function(){
        return this.length > 10
    },
    required: true,
    unique: true,
  },
  //date on which transaction happened
  transactionDate: {
    type: Date,
    required: true,
    //YYYY-MM-DD
    min: '2022-01-01',
  },
  //date on which transaction registered
  transactionTime: {
    type: String,
    required: true,
  },
  //used which mode to pay
  transactionMethod: {
    type: String,
    enum: {
        values: ['Net Banking','UPI', 'Card', 'Cash'],
        message: '{VALUE} is not one of the suggested methods'
    },
    required: true,
  },
  //either Credit or Debit
  transactionType: {
    type: String,
    enum: {
        values: ['Credit', 'Debit'],
        message: '{VALUE} is not a valid transaction type'
    }
  },
  //reason for the transaction
  intent: {
    //if debited-credited  for a campaign
    campaignName: String,
    //else for any other reason
    others: String,
  },
  //person making the transaction
  madeBy: {
    //name of the person making transaction
    name: String,
    //who he is
    role: String,
    //address of the said person
    address: String,
    //his id
    aadharId: Number,
  },
});

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;
