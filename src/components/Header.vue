<template>
  <div class="header d-flex align-items-center justify-content-between">
    <router-link
      class="link"
      :to="{
        name: 'catalog'
      }"
    >
      <a class="logo link">
        <img src="../assets/logo.png" alt="logo" width="100px" />
      </a>
    </router-link>
    <b-nav class="header-nav">
      <router-link
        class="link"
        :to="{
          name: 'shipment'
        }"
      >
        <a class="link">Доставка</a>
      </router-link>
      <router-link
        class="link"
        :to="{
          name: 'payment'
        }"
        ><a class="link">Оплата</a>
      </router-link>
      <router-link
        class="link"
        :to="{
          name: 'contacts'
        }"
        ><a class="link">Контакты</a>
      </router-link>
      <router-link
        v-if="!CART.length"
        class="link"
        :to="{
          name: 'cart',
          params: {
            cart_data: CART
          }
        }"
      >
        <a class="link"
          ><b-icon
            class="icon"
            icon="cart2"
            scale="1.25"
            shift-v="1.25"
            aria-hidden="true"
          ></b-icon
          >Корзина: {{ CART.length }}</a
        >
      </router-link>
      <router-link
        v-else
        class="link"
        :to="{
          name: 'cart',
          params: {
            cart_data: CART
          }
        }"
      >
        <a class="link"
          ><b-icon
            class="icon"
            icon="cart-fill"
            scale="1.25"
            shift-v="1.25"
            aria-hidden="true"
          ></b-icon
          >Корзина: {{ CART.length }}</a
        >
      </router-link>
      <a v-if="!isLoggedIn" class="link"
        ><b-icon
          class="icon"
          icon="box-arrow-in-right"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon
        >Войти</a
      >
      <a v-else class="link" @click="logOut"
        ><b-icon
          class="icon"
          icon="box-arrow-left"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon
        >Выйти</a
      >
    </b-nav>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Header",
  methods: {
    ...mapActions("auth", ["logout"]),
    async logOut() {
      await this.logout();
      this.$router.push({ name: "login" });
    }
  },
  computed: {
    ...mapGetters(["CART"]),
    ...mapGetters("auth", ["isLoggedIn"])
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

.icon {
  margin-right: 5px;
}
</style>
