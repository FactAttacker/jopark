const express = require('express');
const app = express();


//db 정보 
var db_config = require('./db.js');

/*db_config.connection.query('select user_id from user_manage_tbl', function(err, rows, fields) {
  if (!err)
    console.log('user rows: ', rows);
  else
    console.log('Error while performing Query.', err); 
}); */

/**서버 연결*/
var port = '8080';
var listener = app.listen(port, ()=>{
     console.log('[Express] Web Server started at %d port', listener.address().port);
     console.log('address:', listener.address());

     // console.log(listener instanceof Object);
     // console.log( instanceof this);
});

app.get('/', (req, res) => {
    db_config.connection.query('select user_id, password from user_manage_tbl', function(err, rows, fields) {
      if (!err)
        console.log('user rows: ', rows);
      else
        console.log('Error while performing Query.', err); 
    });
    res.writeHead(200,{"Content-type":"text/html; charset=utf-8"});
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head> <title></tilte> </head>");
    res.write("<body><h1>TEST</h1></body>");
    res.write("</html>");

    // console.log(listener.prototype.typeof);
    var data = {'response': 'Connection is working well'};
    res.header('Content-type','application/json');
    res.send(data);

    res.end();
});



//localhost:8080/user/userCheck)
app.use('/user', require('./workflow/user_manage/userController'));



//
/*const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/

// connection.end();