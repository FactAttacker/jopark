"use strict";

//DAO
var db_config = require('../../db.js');
var select_qusery = require('../../sql/user/selectSQL.js');

exports.select_user_dao = function(param,callback){
	var sql = select_qusery.user_total_list(param);

	db_config.connection.query(sql, function(err, data, fields) {
	  	var reusultArray = new Array();
	  	if (!err){
	  		console.log('user_rows: ', data);
			reusultArray = data;
	  	}else{
			console.log('Error while performing Query.', err);
  		}	

	  		console.log('SQL :::',sql);
	  		console.log('reusultArray :::',reusultArray); 
	  		callback(reusultArray);		
	});
}