var user_id = "";
var user_pw = "";

module.exports.user_param = function(req,res){
	console.log("user param : " , req.query);
	this.user_id = req.query.user_id;
	this.user_pw = req.query.user_pw;

	//사용자 아이디
	this.getUser_id = function(){
		return user_id;
	}

	this.getUser_pw = function(){
		return user_pw;
	}

};


/*
var f = new user_param({"user_pw":""})

var ss - require('user_param');
ss.user_param('req', 'res', (result)=>{
console.log('result:', result);
})*/