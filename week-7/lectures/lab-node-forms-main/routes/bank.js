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

router.get("/banking", (req, res) => {
    res.render("banking");
  });
  
  router.get('/checkingbalance', (req, res) => {
      
      
  });
  
  router.get('/savingsbalance', (req, res) => {
      
      
  });
  
  router.post('/depositchecking', (req, res) => {
      
      
  
  })
  
  
  module.exports = router;