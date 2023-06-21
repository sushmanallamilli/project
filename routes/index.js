var express = require('express')
var router = express.Router()

const databaseUrl = process.env.DATABASE_URL
/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express', url: databaseUrl ?? 'No url'})
})

module.exports = router
