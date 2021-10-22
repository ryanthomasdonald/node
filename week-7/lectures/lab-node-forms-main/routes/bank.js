const express = require("express");
const router = express.Router();

let db = {
    checking: 200,
    savings: 1500,
    transactions: [{
        type: 'savings/deposit', 
        amount:245, 
        date: (new Date()).toLocaleString()
    },
    {
        type: 'checking/deposit', 
        amount: 123, 
        date: (new Date()).toLocaleString()
    }
]
}

router.get("/bank", (req, res) => {
    res.render("bank");
});

router.get('/checkingbalance', (req, res) => {
    res.json({checking: db.checking});
});

router.get('/savingsbalance', (req, res) => {
    res.json({savings: db.savings});
});

router.get("/transhist", (req, res) => {
    res.json({transHist: db.transactions});         // doesn't work
});

router.post('/depositchecking', (req, res) => {
    let {amount, transType} = req.body;             // comes in as string
    amount = parseFloat(amount);

    if(transType === "checking/deposit"){
        db.checking = db.checking + amount;
    }
    else if(transType === "savings/deposit"){
        db.savings = db.savings + amount;
    };

    let transaction = {
        type: transType,
        amount: amount,
        date: (new Date()).toLocaleString()
    };

    db.transactions.push(transaction);

    res.json({checking: db.checking, savings: db.savings});
});

module.exports = router;