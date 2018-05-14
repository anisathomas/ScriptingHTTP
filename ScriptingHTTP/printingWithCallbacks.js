//Step 4
var https = require('https');

function getHTML (options, callback) {


  https.get(requestOptions, function (response) {

  response.setEncoding('utf8');
  var Bufferdata = "";

  response.on('data', function (data) {


    Bufferdata += data;

  });

  response.on('end', function() {
    // console.log('Response stream complete.');
    callback(Bufferdata);
  });

});


}


function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};


getHTML(requestOptions, printHTML);