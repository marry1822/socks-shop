import mutations from "@/store/mutations";
import {
  firebaseLogin,
  firebaseLogout,
  firebaseSignup,
  sendEmailVerification
} from "@/services/firebase/auth.service";
const { IS_LOGGED_IN, LOGIN_LOADER, SIGNUP_LOADER } = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false,
    signupInProgress: false
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
    signupInProgress: ({ signupInProgress }) => signupInProgress
  },
  mutations: {
    [IS_LOGGED_IN](state, bool) {
      state.isLoggedIn = bool;
    },
    [LOGIN_LOADER](state, bool) {
      state.loginInProgress = bool;
    },
    [SIGNUP_LOADER](state, bool) {
      state.signupInProgress = bool;
    }
  },
  actions: {
    setIsLoggedInState: {
      handler({ commit }, bool) {
        commit(IS_LOGGED_IN, bool);
      },
      root: true
    },
    async login({ commit, dispatch }, { email, password }) {
      try {
        commit(LOGIN_LOADER, true);
        await firebaseLogin(email, password);
      } catch (error) {
        dispatch(
          "loadMessage",
          { variant: "danger", title: "Error", message: error.message },
          { root: true }
        );
      } finally {
        commit(LOGIN_LOADER, false);
      }
    },
    async logout() {
      try {
        await firebaseLogout();
      } catch (error) {
        console.log(error);
      }
    },
    async signup({ commit, dispatch }, { email, password }) {
      try {
        commit(SIGNUP_LOADER, true);
        await firebaseSignup(email, password);
        sendEmailVerification();
      } catch (error) {
        dispatch(
          "loadMessage",
          { variant: "danger", title: "Error", message: error.message },
          { root: true }
        );
      } finally {
        commit(SIGNUP_LOADER, false);
      }
    }
  }
};

export default authStore;
