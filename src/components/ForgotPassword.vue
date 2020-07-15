<template>
  <div
    class="forgot-password d-flex align-items-center justify-content-center flex-column"
  >
    <h1 class="title">Cбросить пароль</h1>
    <b-form
      d-flex
      flex-column
      novalidate
      class="form"
      :model="email"
      @submit.prevent="onSubmit"
    >
      <b-form-group>
        <b-form-input
          placeholder="Введите email"
          v-model="email"
          @blur="$v.email.$touch()"
          :class="{ 'is-invalid': $v.email.$error }"
          type="text"
          id="email"
        >
        </b-form-input>
        <div class="invalid-feedback" v-if="!$v.email.required">
          Введите email
        </div>
        <div class="invalid-feedback" v-if="!$v.email.email">
          Введите корректный email
        </div>
      </b-form-group>
      <div>
        <b-button
          class="form-btn"
          :disabled="disaledBtn"
          type="submit"
          variant="primary"
          >Сбросить пароль<b-spinner
            small
            v-if="resetPasswordInProgress"
          ></b-spinner
        ></b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";
import { mapActions, mapGetters } from "vuex";
import router from "@/router/router";
export default {
  name: "ForgotPassword",
  data: () => ({
    email: ""
  }),
  validations: {
    email: {
      required,
      email
    }
  },
  methods: {
    ...mapActions("auth", ["resetPassword"]),
    onSubmit() {
      this.resetPassword(this.email);
      router.push({ name: "login" });
    }
  },
  computed: {
    ...mapGetters("auth", ["resetPasswordInProgress"]),
    disaledBtn() {
      return this.$v.email.$invalid;
    }
  }
};
</script>

<style scoped>
.forgot-password {
  height: 70vh;
}

.title {
  margin: 50px 0;
}

.form {
  width: 400px;
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
</style>
