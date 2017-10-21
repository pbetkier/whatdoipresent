import test from 'ava';
import { shallow, mount } from 'vue-test-utils';
import App from '../src/app.vue';
import Vue from 'vue';

test.beforeEach(async t => {
  const app = mount(App);

  Object.assign(t.context, {
    wrapper:      app,
    h1:        app.find('h1'),
    nextTalkLink: app.find('a')
  });

  await Vue.nextTick();
})

test.afterEach(async t => {
  t.context.wrapper.vm.$destroy(true);
})

test('App renders talk title', async t => {
  t.truthy(t.context.h1.text().length > 0)
});

test('App renders a new talk title upon clicking nextTalk link', async t => {
  const { h1, nextTalkLink } = t.context;
  const title1 = h1.text();

  nextTalkLink.trigger('click');
  await Vue.nextTick();

  const title2 = h1.text();
  t.not(title1, title2);
});

test('App renders a new talk title upon pressing enter', async t => {
  const { h1 } = t.context;
  const title1 = h1.text();

  window.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 13 }));
  await Vue.nextTick();

  const title2 = h1.text();
  t.not(title1, title2);
});

test('App renders a new talk title upon pressing space', async t => {
  const { h1 } = t.context;
  const title1 = h1.text();

  window.dispatchEvent(new KeyboardEvent('keyup', { keyCode: 32 }));
  await Vue.nextTick();

  const title2 = h1.text();
  t.not(title1, title2);
});
