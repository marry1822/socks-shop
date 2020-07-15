<template>
  <div
    class="auth d-flex align-items-center justify-content-center flex-column"
  >
    <h1 class="title">Регистрация</h1>
    <RegisterForm />
  </div>
</template>

<script>
import RegisterForm from "@/components/RegisterForm";
export default {
  name: "Login",
  components: {
    RegisterForm
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
