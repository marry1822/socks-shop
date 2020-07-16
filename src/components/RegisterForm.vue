<template>
  <div class="register-form">
    <b-form
      class="form register-form"
      novalidate
      :model="formData"
      @submit.prevent="onSubmitRegister"
    >
      <b-form-group label="Email:" label-for="emailRegister" prop="email">
        <b-form-input
          placeholder="Введите email"
          v-model="formData.email"
          @blur="$v.formData.email.$touch()"
          :class="{
            'is-invalid': $v.formData.email.$error
          }"
          id="emailRegister"
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
      <b-form-group
        label="Пароль:"
        label-for="passwordRegister"
        prop="password"
      >
        <b-form-input
          v-if="!showRegisterPassword"
          placeholder="Введите пароль"
          @blur="$v.formData.password.$touch()"
          v-model="formData.password"
          :class="{
            'is-invalid': $v.formData.password.$error
          }"
          id="passwordRegister"
          type="password"
        >
        </b-form-input>
        <b-form-input
          v-else
          placeholder="Введите пароль"
          @blur="$v.formData.password.$touch()"
          v-model="formData.password"
          :class="{
            'is-invalid': $v.formData.password.$error
          }"
          id="passwordRegister"
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
          id="show-register-password"
          size="sm"
          v-model="showRegisterPassword"
        >
          Показать пароль
        </b-form-checkbox>
      </b-form-group>
      <b-form-group
        label="Подтвердите пароль:"
        label-for="confirmPasswordRegister"
        prop="confirmPassword"
      >
        <b-form-input
          placeholder="Введите пароль"
          @blur="$v.formData.confirmPassword.$touch()"
          v-model="formData.confirmPassword"
          :class="{
            'is-invalid': $v.formData.confirmPassword.$error
          }"
          id="confirmPasswordRegister"
          type="password"
        >
        </b-form-input>
        <div
          v-if="!$v.formData.confirmPassword.required"
          class="invalid-feedback"
        >
          Введите пароль
        </div>
        <div
          v-if="!$v.formData.confirmPassword.minLength"
          class="invalid-feedback"
        >
          Пароль должен содержать не менее 6 символов
        </div>
        <div
          v-if="!$v.formData.confirmPassword.sameAs"
          class="invalid-feedback"
        >
          Пароли не совпадают
        </div>
      </b-form-group>
      <b-button
        class="form-btn"
        :disabled="disaledBtnRegister"
        type="submit"
        variant="primary"
        >Зарегистрироваться<b-spinner small v-if="signupInProgress"></b-spinner
      ></b-button>
    </b-form>
  </div>
</template>

<script>
import { email, minLength, required, sameAs } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "RegisterFrom",
  data: () => ({
    formData: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    showRegisterPassword: false
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
      },
      confirmPassword: {
        required,
        minLength: minLength(6),
        sameAs: sameAs("password")
      }
    }
  },

  methods: {
    ...mapActions("auth", ["signup"]),
    onSubmitRegister() {
      this.signup({ ...this.formData });
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
    ...mapGetters("auth", ["signupInProgress", "isLoggedIn"]),
    disaledBtnRegister() {
      return (
        this.$v.formData.email.$invalid ||
        this.$v.formData.password.$invalid ||
        this.$v.formData.confirmPassword.$invalid
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
  margin-top: 20px;
}

.form-btn {
  background-color: #e2dcd5;
  color: #5e616a;
  border-color: #c5c0ba;
  width: 200px;
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

.to-catalog {
  padding: 5px 10px;
}

.link {
  cursor: pointer;
  color: #5e616a;
  text-decoration: none;
}

.link:hover {
  color: darkgray;
}
</style>
