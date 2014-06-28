var http = require("http");
var port = process.env.port || 3000;
var request = require("request");
var fs = require("fs");

http.createServer(function (req, res) {
  var result = "";

  fs.readFile("./index.html", "utf8", function (err, data) {
    result += data;

    request("http://graph.facebook.com/Boo/photos?type=uploaded", function(err, body, response) {
      var json = JSON.parse(response);
      var imgs = "";
      json.data.forEach(function (val, idx) {
        var source = val.images[3].source;
        imgs += "<img src='" + source + "'>";
      });

      res.end(result.replace("{IMG}", imgs));
    });
  });

}).listen(port);

console.log("Create server port: " + port);

