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
  </div>
</template>

<script>
export default {
  name: "Auth"
};
</script>

<style scoped>
.auth{
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
</style>
