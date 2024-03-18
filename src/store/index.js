import { createStore } from "vuex";
import axios from "axios";
// import sweet from "sweetalert";

// const naturalURL = "https://capstone-b.onrender.com/Products";

export default createStore({
  state: {
    Admin: null,
    products: null,
  },
  getters: {},
  mutations: {
    setProducts(state, data) {
      state.products = data;
    },
    setAdmin(state, data){
      state.products = data
    }
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
  },
  modules: {},
});