<template>
  <div class="header d-flex align-items-center justify-content-between">
    <a class="logo link" href=""
      ><img src="../assets/logo.png" alt="logo" width="100px"
    /></a>
    <b-nav class="header-nav">
      <router-link
        class="link"
        :to="{
          name: 'shipment'
        }"
      >
        <a href="shipment" class="link">Доставка</a>
      </router-link>
      <router-link
        class="link"
        :to="{
          name: 'payment'
        }"
        ><a class="link">Оплата</a></router-link
      >
      <router-link
        class="link"
        :to="{
          name: 'contacts'
        }"
        ><a href="contacts" class="link">Контакты</a></router-link
      >

      <router-link
        class="link"
        :to="{
          name: 'cart',
          params: {
            cart_data: CART
          }
        }"
      >
        <a href="cart" class="link">Корзина: {{ CART.length }}</a>
      </router-link>
    </b-nav>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Header",
  computed: {
    ...mapGetters(["CART"])
  }
};
</script>

<style scoped>
.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 100px;
  padding: 20px 30px;
  z-index: 999;
  background-color: #e2dcd5;
}

.logo {
  text-decoration: none;
}

.header-nav a + a {
  padding-left: 20px;
}

.header-nav a:hover {
  color: white;
}

.link {
  cursor: pointer;
  color: #5e616a;
  text-decoration: none;
}
</style>
