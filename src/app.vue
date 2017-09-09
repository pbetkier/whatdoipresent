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

import Chain from 'markov-chains'
import dataset from './data/dataset'

export default {
  name: 'app',
  mounted() {
    this.buildChain();
    this.registerHotkeys();
    this.nextTalk();
  },
  methods: {
    nextTalk() {
      let rounds = 0;
      while (rounds < 5) {
        const candidate = this.chain.walk();
        if (candidate.length > 1) {
            const candidateTalk = candidate.join(" ");
            if (!this.dataset.has(candidateTalk)) {
              this.talk = candidateTalk;
              return;
            }
        }
        rounds += 1;
      }
      this.talk = "*** could not generate talks, this shit ain't working... ***";
    },
    buildChain() {
      console.log(dataset);
      const corpus = Array.from(dataset).map((str) => str.split(' '));
      this.chain = new Chain(corpus);
      this.dataset = dataset;
    },
    registerHotkeys() {
      window.addEventListener('keyup', e => {
        if (e.keyCode === 13 || e.keyCode === 32) {
          this.nextTalk();
        }
      });
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
