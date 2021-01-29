import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import auth from './modules/auth';


export default Vuex.createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth
  },
  plugins: [createPersistedState()]
});
