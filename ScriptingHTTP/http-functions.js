//Step 5

module.exports = function getHTML (options, callback) {
    /* Your code here */
  var https = require('https');


    https.get(options, function (response) {

    response.setEncoding('utf8');
    var Bufferdata = "";

    response.on('data', function (data) {


      Bufferdata += data;

    });

    response.on('end', function() {
      callback(Bufferdata);
    });

  });



};



function printHTML (html) {
  console.log(html);
}