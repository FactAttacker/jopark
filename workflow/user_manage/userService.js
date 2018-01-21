"use strict";

var db_config = require('../../db.js');
var sql = require('../../sql/user/selectSQL.js');
var user_dao = require('./userDAO');

exports.select_users_id = function(req, res, param,callback){
	// let user_map = new Map(param);
	var result = {code:"",desc:"",info:""};
	
	console.log("Service",param);

	/* parameter */
	var user_id = param.hasOwnProperty('user_id') == true && param.user_id !== undefined && param.user_id.length != 0 ?  param.user_id :  ""; 
	var user_pw = param.hasOwnProperty('user_pw') == true && param.user_pw !== undefined && param.user_pw.length != 0 ?  param.user_pw :  "";
	
	/* validation*/
	if(user_id == ""){
		result.code="FAILURE";
		result.desc="사용자 아이디를 입력하세요.";
		result.info="";
		console.log(result);
		return callback(result);
		
	}; 
	if(user_pw == ""){
		result.code="FAILURE";
		result.desc="사용자 비밀번호를 입력하세요.";
		result.info="";
		console.log(result);
		return callback(result);
	};
	
	/* Query JSON */
	var user_param = {
		 "user_id":user_id
		,"user_pw":user_pw
	};
	
	/**/
	user_dao.select_user_dao(user_param, (dao_result)=>{
		console.log("result :::::::::::: ",result);
		if(typeof dao_result !== undefined || dao_result !== null ){
			result.info = dao_result;
			result.desc ="사용자 정보를 조회 했습니다.";
			result.code ="SUCCESS";	
		}else{
			result.info ="";
			result.desc ="사용자 정보가 존재하지 않습니다.";
			result.code ="FAILURE";
		}
		console.log("result :::::::::::: ",result);
		//callback(result);
		return callback(result);
	});

	
}
