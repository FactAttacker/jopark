//DAO js 

module.exports.user_total_list = function(param){
	// var select_user_sql = "select user_id from user_manage_tbl where user_id =" +'"'+ param.user_id +'"'+  " and user_pw =" +'"'+ param.user_pw +'"';
	return "select user_id from user_manage_tbl"+
			" where user_id =" +"'"+ param.user_id +"'"
			+" and password =" +"'"+ param.user_pw +"'";
}
