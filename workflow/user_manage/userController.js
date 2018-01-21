/*사용자 정보*/
'use strict';

const express = require('express');
const router = express.Router();
const userService = require('./userService.js');
var param_req = require('../../screen/userParam.js');

/**사용자 전체 ID 조회*/

/**방법1*/
let userCheck = router.get('/userCheck', (req,res)=>{
	console.log("UserController");
	console.log("Contorller req : "+ JSON.stringify(req.query));
	
	var user_params = new param_req.user_param(req,res);

	/*사용자 아이디 조회*/
	userService.select_users_id(req,res,user_params,(callback)=>{
		console.log("Contorller result : ",callback);
		res.send(callback);
	});
});

/**방법2*/
/*var url = reqiore('url');
var curURL = url.parse();*/

/** 글보기 **/
//router.get('/read', boardController.read);

/** 글쓰기 **/
// router.post('/write', boardController.write);

/** 글수정 **/
// router.put('/modify', boardController.modify);

/** 글제거 **/
// router.delete('/delete', boardController.delete);

module.exports = router;

function param(name, defaultValue) {
  var params = this.params || {};
  var body   = this.body || {};
  var query  = this.query || {};

  var args = arguments.length === 1 ? 'name' : 'name, default';
  deprecate('req.param(' + args + '): Use req.params, req.body, or req.query instead');

  if (null != params[name] && params.hasOwnProperty(name)) return params[name];
  if (null != body[name]) return body[name];
  if (null != query[name]) return query[name];

  return defaultValue;
}
