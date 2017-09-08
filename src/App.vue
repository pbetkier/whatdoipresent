<template>
  <div id="app">
    <h2>Don’t know what to present at a tech conf? Whatever, just talk about...</h2>
    <h1>{{ this.talk }}</h1>
    <ul>
      <li><a @click="nextTalk" href="#">this sucks, give me something else</a></li>
    </ul>
  </div>
</template>

<script>

import data from './devoxx-markov.json'
import Chain from 'markov-chains'

export default {
  name: 'app',
  mounted() {
    this.chain = Chain.fromJSON(JSON.stringify(data));
    window.addEventListener('keyup', e => {
      if (e.keyCode === 13 || e.keyCode === 32) { 
        this.nextTalk();
      }
    });
    this.nextTalk();
  },
  methods: {
    nextTalk() {
      let rounds = 0;
      while (rounds < 5) {
        const walk = this.chain.walk();
        if (walk.length > 1) {
            this.talk = walk.join(" ");
            return;
        }
        rounds += 1;
      }
      this.talk = "*** could not generate talks, this shit ain't working... ***";
    }
  },
  data() {
    return {
      talk: "",
      chain: undefined
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

h1 {
  margin-top: 60px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 120px;
}

li {
  display: inline-block;
  margin: 0 10px;
  font-size: 1.4em;
}

a {
  color: #42b983;
}
</style>
