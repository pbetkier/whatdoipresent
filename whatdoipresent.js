//var Chain = require('markov-chains').default;

var array = ['there is no spoon', 'there no is b00n']
var corpus = array.map((str) => str.split(' '));

var c = new Chain(corpus);
var s = c.walk().join(" ");
console.log(s);
fs.writeFile("json", JSON.stringify(c.toJSON()));
