const zodiacSign = require('get-zodiac-sign');
var myZodiacSign1 = zodiacSign(3,13);
var myZodiacSign2 = zodiacSign(2,18);
console.log(myZodiacSign1);
console.log(myZodiacSign2);

//use the fs function that comes with node
const fs = require("fs");
fs.writeFileSync("file1.txt", myZodiacSign1 + " and " + myZodiacSign2);

// creates a local web server and displays the above variables
const http = require('http');

// changed hostname to 0.0.0.0 to work with Repl web server
const hostname = '0.0.0.0';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end("My Zodiac Sign is " + myZodiacSign1);
  res.end("My Daughter's Zodiac Sign is " + myZodiacSign2);
    
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  console.log('My Zodiac Sign is ' + myZodiacSign1 + 'and daugther is ' + myZodiacSign2)
});
