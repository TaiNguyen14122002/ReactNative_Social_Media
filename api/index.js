const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');

var app = express();
const port = 8000;
var cors = require('cors');
app.use((_req, res, next) => {
    res.header('Acces-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    next();
});

app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const jwt = require('jsonwebtoken');
app.listen(port, () => {
    console.log("Server is runging on port " + port);
});

mongoose.connect("mongodb+srv://musictaibeat:Tai@cluster0.jzuiylj.mongodb.net/", {

}).then(() => {
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.log("Error connecting to MongoDB", error);
})

const Customer = require("./models/customer");
const generateSecretKey = () => {
    const secretKey = crypto.randomBytes(32).toString("hex");
  
    return secretKey;
  };
const secretKey = generateSecretKey();



//Dang ky tai khoan nguoi dung
app.post("/Register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const exist = await Customer.findOne({ email });
        if (exist) {
            console.log("Email already registed:", email);
            return res.status(400).json({ message: "Email already registed" });
        }
        const newCustommer = new Customer({ name, email, password });
        await newCustommer.save();
        console.log("New Customer Registed: ", newCustommer);
        res.status(201).json({
            message:
              "Registration successful. Please check your email for verification.",
          });
    } catch (error) {
        console.log("Error during registration:", error);
        res.status(500).json({ message: "Registed failed" });
    }
})

//Dang nhap tai khoan nguoi dung
app.post("/Login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const Cus = await Customer.findOne({ email });
        if (!Cus) {
            console.log("Customer is no exist");
            return res.status(401).json({
                message: "Customer is no exist"
            });
        }
        else if (Cus.password != password) {
            console.log("Password is wroong");
            return res.status(401).json({
                message: "Password is wroong"
            });
        }
        const token = jwt.sign({ userId: Cus._id }, secretKey);
        res.status(200).json({ token });
    }catch(error){
        res.status(500).json({
            message: "Login Faild"
        });
    }
});