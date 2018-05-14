var https = require('https');

function getAndPrintHTML (options) {

  /* Add your code here */
https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {

    var Bufferdata = "";
    Bufferdata += data;
    console.log(Bufferdata);
   // console.log('Chunk Received.', data);
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

});



}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};




getAndPrintHTML(requestOptions);