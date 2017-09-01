var connect = require("connect");
var serveStatic = require("serve-static");
var app = connect();
var PORT = 3131;

function sayHello(request,response,next){
	response.setHeader("Content-type","text/plain");
	response.end("Hello Connect");
}

//app.use(serveStatic(__dirname + "/app")).listen(3131);

app.use(serveStatic(__dirname + "/"));

var server = app.listen(PORT, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("React app listening at http://%s:%s", host, port);

});