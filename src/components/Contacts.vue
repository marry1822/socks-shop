<template>
  <div
    class="contacts d-flex align-items-center justify-content-center flex-column"
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
    <h1 class="title">Контакты</h1>

    <BNav
      class="contacts-nav d-flex align-items-center justify-content-center flex-column"
    >
      <a
        class="link"
        href="https://www.instagram.com/buywithmary/"
        target="_blank"
        >Instagram<img :src="require('../assets/instagram.png')"
      /></a>
    </BNav>
  </div>
</template>

<script>
export default {
  name: "Contacts"
};
</script>

<style scoped>
.contacts {
  height: 70vh;
  color: #5e616a;
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

.contacts-nav {
  margin: 10px;
}

.contacts-nav a {
  margin: 10px;
  cursor: pointer;
}

.contacts-nav img {
  margin-left: 30px;
  opacity: 0.7;
}

.contacts-nav img:hover {
  transform: scale(1.04);
  transition: all 0.4s ease;
}

.icon {
  margin-right: 5px;
}
</style>
