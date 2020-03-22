new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./firebase/init.js";

import vuetify from "./plugins/vuetify";
import firebase from "firebase";
import "firebase/auth";

Vue.config.productionTip = false;
var app = null;
firebase.auth().onAuthStateChanged(async () => {
  if (!app) {
    // await store.dispatch("setUser");
    new Vue({
      router,
      // store,
      vuetify,
      render: h => h(App)
    }).$mount("#app");
  }
});
export const db = firebase.firestore();
export default app;
