var fs = require('fs')
var Chain = require('markov-chains').default;

var devoxx17 = fs.readFileSync('data/devoxx17').toString().split("\n");
var devoxx16 = fs.readFileSync('data/devoxx16').toString().split("\n");
var devoxx15 = fs.readFileSync('data/devoxx15').toString().split("\n");
var array = devoxx17.concat(devoxx16).concat(devoxx15);
var corpus = array.map((str) => str.split(' '));
//console.log(corpus);

var c = new Chain(corpus);
var s = c.walk().join(" ");
console.log(s);
//fs.writeFile("json", JSON.stringify(c));
//var f = fs.readFileSync("json")
var f = JSON.stringify(c);
console.log(f);
console.log(typeof f);
var c2 = Chain.fromJSON(f);
console.log(c2.walk().join(" "));
