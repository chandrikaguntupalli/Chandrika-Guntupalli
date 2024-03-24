// index.js

// Import necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Create an instance of Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB Atlas
mongoose.connect('mongodb+srv://chandrikaguntupalli2:chandu99@cluster0.trp076i.mongodb.net/Money_List', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("Error connecting to MongoDB Atlas:", err));

// Define schema for transactions
const transactionSchema = new mongoose.Schema({
    Category: String,
    Amount: Number,
    Info: String,
    Date: Date
});

// Define model for transactions
const Transaction = mongoose.model('Transaction', transactionSchema);

// Route to fetch transactions
app.get("/transactions", async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        console.error("Error fetching transactions:", err);
        res.status(500).send("Error fetching transactions");
    }
});

// Route to add a new transaction
app.post("/add", async (req, res) => {
    try {
        const { category_select, amount_input, info, date_input } = req.body;
        const newTransaction = new Transaction({
            Category: category_select,
            Amount: amount_input,
            Info: info,
            Date: date_input
        });
        await newTransaction.save();
        console.log("Transaction added successfully:", newTransaction);
        res.status(200).send("Transaction added successfully");
    } catch (err) {
        console.error("Error adding transaction:", err);
        res.status(500).send("Error adding transaction");
    }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
