<template>
  <div id="app">
    <h2>Don’t know what to present at a tech conf? Whatever, just talk about...</h2>
    <h1>{{ this.talk }}</h1>
    <ul>
      <li><a @click="nextTalk" href="#">this sucks, give me something else</a></li>
    </ul>
    <div>
      <p>
        Created by <a href="https://twitter.com/piotrbetkier">@piotrbetkier</a> using reactive deep learning functions or <a href="https://github.com/pbetkier/whatdoipresent">some shit</a>.
      </p>
    </div>
    <a v-if="this.tweetUrl" class="twitter-share-button" :href="this.tweetUrl">tweet this topic</a>
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
      while (rounds < 10) {
        const candidate = this.chain.walk();
        if (candidate.length > 2 && candidate.length < 15) {
            const candidateTalk = candidate.join(" ");
            if (!this.dataset.has(candidateTalk)) {
              this.talk = candidateTalk;
              const tweetText = encodeURIComponent(`Just submitted "${candidateTalk}" talk https://goo.gl/XFu4dA #c4p #whatdoipresent`);
              this.tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
              return;
            }
        }
        rounds += 1;
      }
      this.talk = "*** could not generate talks, this shit ain't working... ***";
    },
    buildChain() {
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
      chain: undefined,
      tweetUrl: ""
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
  margin: 60px;
  min-height: 100px;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 40px;
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
