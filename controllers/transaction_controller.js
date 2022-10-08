module.exports = {
    getAllTransactions(req,res,next){
        console.log(req.query.label)
        res.send('Its Working')
    },
    getMonthlyTransactions(req,res,next){
        res.send('Its Working 2')
    },
    getYearlyTransactions(req,res,next){
        res.send('Its working 3')
    },
    getTransactionsByCampaignId(req,res,next){
        console.log(req.params)
        res.send('Its working 4')
    }

}