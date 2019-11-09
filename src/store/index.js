import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    Loginstate: true,
  },
  mutations: {

    Change(state){

      console.log("Vuex mutation change");
      state.Loginstate = !state.Loginstate;
    }
  },
  actions: {

    Change(context){
      
      context.commit('Change');
    }
  },
  modules: {
  },
  getters: {

    Loginstate: state => state.Loginstate,
  },
});
