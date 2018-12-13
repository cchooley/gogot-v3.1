import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "@/store";

// ===== Modules =====
import DashboardModule from "./DashboardModule";

Vue.use(Vuex);
Vue.use(VueAxios, axios);

Vue.axios.defaults.baseURL = "https://gogot-server.herokuapp.com";
Vue.axios.defaults.headers.common["Accept"] = "application/json";
Vue.axios.defaults.headers.common["Content-Type"] = "application/json";
Vue.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

Vue.axios.interceptors.response.use(undefined, err => {
  if (err.response.status === 401) {
    store.dispatch("logout");
  }

  if (err.response.status === 401) {
    store.dispatch("accessDenied");
  }

  return Promise.reject(err);
});

if (sessionStorage.getItem("access_token")) {
  Vue.axios.defaults.headers.common["Authorization"] = sessionStorage.getITem(
    "access_token"
  );
}

export default new Vuex.Store({
  modules: {
    dashboard: DashboardModule
  }
});