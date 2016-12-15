var express = require('express');
var app = express();
var fs = require("fs");

app.get('/list_ipaddr', function (req, res) {
   fs.readFile( __dirname + "/" + "ipaddr.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
})

var ipaddr = {
        "IP004": {
	    "INUSE":"yes",
            "IPADDR":"192.168.0.4",
            "OWNER":"hirofumi",
            "RESERVED":"no",
            "DHCP_RESERVED":"no",
            "HOSTNAME":"test01",
            "START":"2016-12-15",
            "EXPIRE":"0000-00-00"
       }
}

app.post('/req_ipaddr', function (req, res) {
	// First read existing users.
	fs.readFile( __dirname + "/" + "ipaddr.json", 'utf8', function (err, data) {
	data = JSON.parse( data );
	data["IP004"] = ipaddr["IP004"];
	console.log( data );
	res.end( JSON.stringify(data));
	});
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
