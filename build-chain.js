var fs = require('fs')
var Chain = require('markov-chains').default;

var devoxx17 = fs.readFileSync('data/devoxx17').toString().split("\n");
var devoxx16 = fs.readFileSync('data/devoxx16').toString().split("\n");
var devoxx15 = fs.readFileSync('data/devoxx15').toString().split("\n");
var array = devoxx17.concat(devoxx16).concat(devoxx15);
var corpus = array.map((str) => str.split(' '));

var c = new Chain(corpus);
fs.writeFile("devoxx-markov.json", JSON.stringify(c));
