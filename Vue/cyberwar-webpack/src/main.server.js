// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/**
 * File: main.server.js
 * Created by: David "Ty" Long
 * Date: 7/17/17
 * Info: Server side rendering of the game. Controls the game state and adjudication. Clients will poll this server.
 * Dependencies:
 * npm install express vue-server-renderer
 * npm install vue-ssr-webpack-plugin -D
 *
 */

import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
// Receives the context of the render call, returning a Promise resolution to the root Vue instance.
export default context => {
  return Promise.resolve(
    new Vue({
      render: h => h(App)
    })
  );
}
