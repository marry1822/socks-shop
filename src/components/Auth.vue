<template>
  <div
    class="auth d-flex align-items-center justify-content-center flex-column"
  >
    <router-link
      class="link"
      :to="{
        name: 'catalog'
      }"
    >
      <a class="to-catalog link"
        ><b-icon
          class="icon"
          icon="arrow-left"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon
        >В каталог</a
      >
    </router-link>
    <h1 class="title">Авторизуйтесь</h1>
    <div class="forms">
      <b-tabs content-class="mt-3" justified>
        <b-tab title="Регистрация" active>
          <b-form class="register-form">
            <b-form-group id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input
                id="email"
                type="email"
                required
                placeholder="Введите email"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Имя:" label-for="input-2">
              <b-form-input
                id="firstName"
                required
                placeholder="Введите ваше имя"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Фамилия:"
              label-for="input-2"
            >
              <b-form-input
                id="lastName"
                required
                placeholder="Введите вашу фамилию"
              ></b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Пароль:"
              label-for="input-2"
            >
              <b-form-input
                id="password"
                required
                placeholder="Придумайте пароль"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">Submit</b-button>
            <b-button type="reset" variant="danger">Reset</b-button>
          </b-form>
        </b-tab>
        <b-tab title="Вход">
          <b-form class="login-form">
            <b-form-group id="input-group-1" label="Email:" label-for="input-1">
              <b-form-input
                id="email"
                type="email"
                data-required="email"
                required
                placeholder="Введите email"
              >
              </b-form-input>
            </b-form-group>
            <b-form-group
              id="input-group-2"
              label="Пароль:"
              label-for="input-2"
            >
              <b-form-input
                id="password"
                data-required="password"
                required
                placeholder="Придумайте пароль"
              ></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Submit</b-button>
          </b-form>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth"
};
</script>

<style scoped>
.auth {
  margin-top: 150px;
}

.title {
  margin: 50px 0;
}

.to-catalog {
  position: absolute;
  left: 30px;
  top: 150px;
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

.icon {
  margin-right: 5px;
}

.form {
}
</style>
