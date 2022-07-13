import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  getters: {
    getUsers: state => state.users,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    }
  },
  actions: {
    getUsersFromApi() {
      axios.get("https://reqres.in/api/users").then((response) => {
        this.commit('setUsers',  _.get(response, 'data.data'))
      });
    },
    getUserById(store, id) {
      let users = _.get(store, 'state.users') || [];
      return users.find(elem => elem.id === id );
    },
    editUser(store, user) {
      let users = _.get(store, 'state.users') || [];
      let index = users.findIndex(elem => elem.id === user.id );
      users.splice(index, 1, user);
    },
    deleteUser(store, id) {
      let users = _.get(store, 'state.users') || [];
      let index = store.state.users.findIndex(elem => elem.id === id );
      users.splice(index, 1);
    }
  }
})