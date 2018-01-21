//커넥션 정보
var mysql    = require('mysql');
var connection = mysql.createConnection({
   host     : 'jopark.c0lay90wlcej.ap-northeast-2.rds.amazonaws.com'
  ,user     : 'creators'
  ,password : 'ruddudrltnf'
  ,port     : '3306'
  ,database : 'joparkdb'	
});

//실행
connection.connect();

module.exports.connection = connection;
