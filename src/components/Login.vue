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
    <h1 class="title">Вход</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from "@/components/LoginForm";
export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style scoped>
.auth {
  height: 100vh;
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
</style>
