const express = require('express')
const transactionController = require('../controllers/transaction_controller')

const router = express.Router()

//GET routes for all the transactions
router.get('/get_transaction', transactionController.getAllTransactions)
router.get('/get_transaction/monthly', transactionController.getMonthlyTransactions)
router.get('/get_transaction/yearly', transactionController.getYearlyTransactions)
router.get('/get_transaction/campaign/:campaign_id', transactionController.getTransactionsByCampaignId)
//send CSV

//GET routes for all the filters over the filtered transaction dataset
router.get('/get_transaction?filter=date')
router.get('/get_transaction?filter=name')
router.get('/get_transaction?filter=amount')
router.get('/get_transaction?filter=campaign_id')
//search filter
//send CSV

//POST routes to add all the transactions 
router.post('/add_transaction?type=credit')
router.post('/add_transaction?type=debit')
router.post('/add_transaction?type=donation')

module.exports = router