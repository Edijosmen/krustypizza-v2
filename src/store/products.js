//import shop from "../api/shop.js";
import ProductoService from "../services/Productos.js";

import Vue from "vue";
export default {
  state: {
    products: [],
    selectedProduct: {}
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setProductsLocal(state, products){
      state.products = products
    },
    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },
    editProduct(state, data) {
      const index = state.products.findIndex(
        product => product.id === state.selectedProduct.id
      );
      const product = Object.assign({}, state.products[index], data);
      Vue.set(state.products, index, product);
    },
    decrementProductInventory(state, product) {
      product.inventory--;
    },
    incrementProductInventory(state, item) {
      const product = state.products.find(product => product.id === item.id);
      product.inventory += item.quantity;
    }
  },
  actions: {
    
    setProductsTmp(context, productosTmp){
      context.commit("setProducts", productosTmp);    
    },

    getProducts({ commit }) {
      return new Promise(resolve => {
        ProductoService.get().then(products => {
          commit("setProducts", products.data.results);
                //Aqui va el localStorage
          window.localStorage.setItem('productosTmp', JSON.stringify(products.data.results));

          resolve();
        });
      });
    }
  },
  getters: {
    productsOnStock(state) {
      var a = state.products.filter(product => {
        return product.id > 0;
      });
      window.localStorage.setItem('productosTmp', JSON.stringify(a));

      return a;
    },
    selectedProduct(state) {
      return state.selectedProduct;
    },
    nearlySoldOut(state) {
      return id => {
        return state.products.find(product => product.id === id).inventory < 2;
      };
    }
  }
};