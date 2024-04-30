const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,

    }
});

const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = Customer