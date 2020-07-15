import mutations from "@/store/mutations";
import {
  firebaseLogin,
  firebaseLogout,
  firebaseSignup,
  sendEmailVerification,
  firebaseResetPassword
} from "@/services/firebase/auth.service";
const {
  IS_LOGGED_IN,
  LOGIN_LOADER,
  SIGNUP_LOADER,
  RESET_PASSWORD_LOADER
} = mutations;

const authStore = {
  namespaced: true,
  state: {
    isLoggedIn: false,
    loginInProgress: false,
    signupInProgress: false,
    resetPasswordInProgress: false
  },
  getters: {
    isLoggedIn: ({ isLoggedIn }) => isLoggedIn,
    loginInProgress: ({ loginInProgress }) => loginInProgress,
    signupInProgress: ({ signupInProgress }) => signupInProgress,
    resetPasswordInProgress: ({ resetPasswordInProgress }) =>
      resetPasswordInProgress
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
    },
    [RESET_PASSWORD_LOADER](state, bool) {
      state.resetPasswordInProgress = bool;
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
        dispatch(
          "loadMessage",
          { variant: "success", message: "Вход выполнен успешно!" },
          { root: true }
        );
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
    async logout({ dispatch }) {
      try {
        await firebaseLogout();
      } catch (error) {
        dispatch(
          "loadMessage",
          { variant: "danger", title: "Error", message: error.message },
          { root: true }
        );
      }
    },
    async signup({ commit, dispatch }, { email, password }) {
      try {
        commit(SIGNUP_LOADER, true);
        await firebaseSignup(email, password);
        sendEmailVerification();
        dispatch(
          "loadMessage",
          {
            variant: "success",
            message:
              "Вы успешно зарегистрировались, письмо с подтверждением отправлено на ваш email"
          },
          { root: true }
        );
      } catch (error) {
        dispatch(
          "loadMessage",
          { variant: "danger", title: "Error", message: error.message },
          { root: true }
        );
      } finally {
        commit(SIGNUP_LOADER, false);
      }
    },
    async resetPassword({ commit, dispatch }, email) {
      try {
        commit(RESET_PASSWORD_LOADER, true);
        await firebaseResetPassword(email);
        dispatch(
          "loadMessage",
          {
            variant: "info",
            message: "Инструкция по сбросу пароля отправлена на ваш email"
          },
          { root: true }
        );
      } catch (err) {
        dispatch(
          "loadMessage",
          { variant: "error", message: err.message },
          { root: true }
        );
      } finally {
        commit(RESET_PASSWORD_LOADER, false);
      }
    }
  }
};

export default authStore;
