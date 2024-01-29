const express = require('express');
const router = express.Router();
const postController = require('../controller/transactionController')
router.post('/api/add-transaction', postController.addTransaction)
router.get('/api/transactions', postController.getTransactions)

module.exports = router
