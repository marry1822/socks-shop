import Vue from "vue";
import Vuex from "vuex";
import authGuard from "@/guards/auth.guard";
import axios from "axios";
import firebase from "@/plugins/firebase";
import { getUserIdToken } from "@/services/firebase/auth.service";
import mutations from "./mutations";
import auth from "./modules/auth";
import notify from "./modules/notify";
import user from "./modules/user";

const {
  SET_PRODUCTS_TO_STATE,
  TO_CART,
  REMOVE_FROM_CART,
  DECREMENT,
  INCREMENT
} = mutations;

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    }
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios.get("https://buy-with-mary-server.herokuapp.com/products")
        .then(products => {
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    },
    ADD_TO_CART({ commit, state }, product) {
      if (state.cart.length) {
        let isProductExists = false;
        state.cart.map(function(item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          commit("TO_CART", product);
        }
      } else {
        commit("TO_CART", product);
      }
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    DECREMENT_CART_ITEM({ commit }, index) {
      commit("DECREMENT", index);
    },
    INCREMENT_CART_ITEM({ commit }, index) {
      commit("INCREMENT", index);
    }
  },
  mutations: {
    [SET_PRODUCTS_TO_STATE](state, products) {
      state.products = products;
    },
    [TO_CART](state, product) {
      state.cart.push({ ...product, quantity: 1 });
    },
    [REMOVE_FROM_CART](state, index) {
      state.cart.splice(index, 1);
    },
    [DECREMENT](state, index) {
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity--;
      }
    },
    [INCREMENT](state, index) {
      state.cart[index].quantity++;
    }
  },
  modules: {
    auth,
    notify,
    user
  }
});

firebase.auth().onAuthStateChanged(async userData => {
  store.dispatch("setIsLoggedInState", Boolean(userData));
  store.dispatch("setUserState", userData);

  if (userData) {
    const token = await getUserIdToken();
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
});

authGuard(store);

export default store;
