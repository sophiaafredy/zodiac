const zodiacSign = require('get-zodiac-sign');
var myZodiacSign = zodiacSign(1,7);
console.log(myZodiacSign);

//use the fs function that comes with node
const fs = require("fs");
fs.writeFileSync("file1.txt", myZodiacSign);

// creates a local web server and displays the above variables
const http = require('http');

// changed hostname to 0.0.0.0 to work with Repl web server
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("My Zodiac Sign is " + myZodiacSign);
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('My Zodiac Sign is ' + myZodiacSign)
});
