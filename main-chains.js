var fs = require('fs')
var Chain = require('markov-chains').default;

var array = fs.readFileSync('devoxx17').toString().split("\n");
var corpus = array.map((str) => str.split(' '));
//console.log(corpus);

var c = new Chain(corpus);
var s = c.walk().join(" ");
console.log(s);
