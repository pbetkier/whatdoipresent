var fs = require('fs')
var Chain = require('markov-chains').default;

var devoxx17 = fs.readFileSync('devoxx17').toString().split("\n");
var devoxx16 = fs.readFileSync('devoxx16').toString().split("\n");
var devoxx15 = fs.readFileSync('devoxx15').toString().split("\n");
var array = devoxx17.concat(devoxx16).concat(devoxx15);
var corpus = array.map((str) => str.split(' '));
//console.log(corpus);

var c = new Chain(corpus);
var s = c.walk().join(" ");
console.log(s);
fs.writeFile("json", JSON.stringify(c.toJSON()));
