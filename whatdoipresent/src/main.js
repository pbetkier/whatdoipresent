import Vue from 'vue'
import App from './App.vue'
import data from './devoxx-markov.json'
import Chain from 'markov-chains'

var c = Chain.fromJSON(JSON.stringify(data));
console.log(c.walk().join(" "));

new Vue({
  el: '#app',
  render: h => h(App)
})
