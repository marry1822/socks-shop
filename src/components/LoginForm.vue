<template>
  <div class="login-form">
    <b-form
      d-flex
      flex-column
      novalidate
      class="form login-form"
      :model="formData"
      @submit.prevent="onSubmitLogin"
    >
      <b-form-group label="Email:" label-for="emailLogin" prop="email">
        <b-form-input
          placeholder="Введите email"
          v-model="formData.email"
          @blur="$v.formData.email.$touch()"
          :class="{ 'is-invalid': $v.formData.email.$error }"
          id="emailLogin"
          type="text"
        >
        </b-form-input>
        <div class="invalid-feedback" v-if="!$v.formData.email.required">
          Введите email
        </div>
        <div class="invalid-feedback" v-if="!$v.formData.email.email">
          Введите корректный email
        </div>
      </b-form-group>
      <b-form-group label="Пароль:" label-for="passwordLogin" prop="password">
        <b-form-input
          v-if="!showLogInPassword"
          placeholder="Введите пароль"
          @blur="$v.formData.password.$touch()"
          v-model="formData.password"
          :class="{ 'is-invalid': $v.formData.password.$error }"
          id="passwordLogin"
          type="password"
        >
        </b-form-input>
        <b-form-input
          v-else
          placeholder="Введите пароль"
          @blur="$v.formData.password.$touch()"
          v-model="formData.password"
          :class="{ 'is-invalid': $v.formData.password.$error }"
          id="passwordLogin"
          type="text"
        >
        </b-form-input>
        <div v-if="!$v.formData.password.required" class="invalid-feedback">
          Введите пароль
        </div>
        <div v-if="!$v.formData.password.minLength" class="invalid-feedback">
          Пароль должен содержать не менее 6 символов
        </div>
        <b-form-checkbox
          class="show-password-checkbox"
          id="show-password"
          size="sm"
          v-model="showLogInPassword"
        >
          Показать пароль
        </b-form-checkbox>
      </b-form-group>
      <div class="form-action d-flex flex-column">
        <router-link
          class="link"
          :to="{
            name: 'forgot_password'
          }"
        >
          <a class="link forgot-password-link" href=""
            >Забыли пароль? Сбросить пароль</a
          ></router-link
        >
        <div>
          <b-button
            class="form-btn"
            :disabled="disaledBtnLogin"
            type="submit"
            variant="primary"
            >Войти<b-spinner small v-if="loginInProgress"></b-spinner
          ></b-button>
        </div>
        <router-link
          class="link"
          :to="{
            name: 'signup'
          }"
        >
          <a class="link register-link" href=""
            >Нет аккаунта? Зарегистрироваться</a
          >
        </router-link>
      </div>
    </b-form>
  </div>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "LoginFrom",
  data: () => ({
    formData: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    showLogInPassword: false
  }),
  validations: {
    formData: {
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      }
    }
  },
  methods: {
    ...mapActions("auth", ["login"]),
    onSubmitLogin() {
      this.login({ ...this.formData });
    },
    redirectToCatalog(val) {
      if (val) {
        this.$router.push({ name: "catalog" });
      }
    }
  },
  watch: {
    isLoggedIn: "redirectToCatalog"
  },
  computed: {
    ...mapGetters("auth", ["loginInProgress", "isLoggedIn"]),
    disaledBtnLogin() {
      return (
        this.$v.formData.email.$invalid || this.$v.formData.password.$invalid
      );
    }
  }
};
</script>

<style scoped>
.form {
  width: 400px;
}

.link {
  cursor: pointer;
  color: #5e616a;
  text-decoration: none;
}

.forgot-password-link {
  text-align: left;
  font-size: 12px;
}

.form-btn {
  background-color: #e2dcd5;
  color: #5e616a;
  border-color: #c5c0ba;
  width: 200px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.form-btn:hover {
  background-color: #c5c0ba;
  color: white;
  border-color: #c5c0ba;
}

.show-password-checkbox {
  text-align: right;
  margin-top: 10px;
}
</style>
