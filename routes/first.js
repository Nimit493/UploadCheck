var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/',function(req,res){
	console.log("Hitting the first function");
	res.send("First hit successful");
});

router.get('/firstPage',function(req,res){
	console.log("Hitting second page");
	res.send("Second page hit successful");
});

module.exports = router;
