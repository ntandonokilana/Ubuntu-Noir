import { createStore } from "vuex";
import axios from "axios";
// import sweet from "sweetalert";

export default createStore({
  state: {
    Admin: null,
    products: null,
    users: null
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setUsers(state, data) {
      state.users = data;
    },
    setAdmin(state, data) {
      state.admin = data; 
    },
  },
  
  actions: {
    async fetchProducts({ commit }) {
      try {
        const { data } = await axios.get('https://capstone-b.onrender.com/products');
        console.log(data); 
          commit("setProducts", data); 
        
      } catch (e) {
        console.error(e);
      }
    },

    async fetchUsers({ commit }){
      try {
        const {data} = await axios.get('https://capstone-b.onrender.com/users');
        console.log(data);
        
        commit("setUsers", data);
      } catch (e){
        console.error(e);
      }
    }
  },
  modules: {},
});