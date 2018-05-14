var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

var printUpperCase = function(str) {
  console.log(str.toUpperCase());
   //return str.toUpperCase()
  /* Write your code here! */
}


getHTML(requestOptions, printUpperCase);

