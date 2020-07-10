<template>
  <div class="forms">
    <b-tabs content-class="mt-3" justified>
      <b-tab title="Вход" active>
        <b-form
          novalidate
          class="form login-form"
          :model="formData"
          @submit.prevent="onSubmit"
        >
          <b-form-group label="Email:" label-for="input-1" prop="email">
            <b-form-input
              placeholder="Введите email"
              v-model="formData.email"
              @blur="$v.formData.email.$touch()"
              :class="{ 'is-invalid': $v.formData.email.$error }"
              id="email"
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

          <b-form-group label="Пароль:" label-for="input-2" prop="password">
            <b-form-input
              placeholder="Введите пароль"
              @blur="$v.formData.password.$touch()"
              v-model="formData.password"
              :class="{ 'is-invalid': $v.formData.password.$error }"
              id="password"
              type="password"
            >
            </b-form-input>
            <div v-if="!$v.formData.password.required" class="invalid-feedback">
              Введите пароль
            </div>
            <div
              v-if="!$v.formData.password.minLength"
              class="invalid-feedback"
            >
              Пароль должен содержать не менее 6 символов
            </div>
          </b-form-group>
          <b-button type="submit" variant="primary">Войти</b-button>
        </b-form>
      </b-tab>
      <b-tab title="Регистрация">
        <b-form class="form register-form">
          <b-form-group label="Email:" label-for="input-1">
            <b-form-input
              id="email"
              type="email"
              required
              placeholder="Введите email"
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Пароль:" label-for="input-2">
            <b-form-input
              id="password"
              required
              placeholder="Придумайте пароль"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Подтвердите пароль:"
            label-for="input-2"
          >
            <b-form-input
              id="password"
              required
              placeholder="Подтвердите пароль"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Подтвердить</b-button>
          <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
        </b-form>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
import { email, minLength, required } from "vuelidate/lib/validators";
export default {
  name: "Forms",
  data: () => ({
    formData: {
      email: "",
      password: ""
    }
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
    onSubmit() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
    }
  }
};
</script>

<style scoped>
.form {
  width: 400px;
}
</style>
