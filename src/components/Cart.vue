<template>
  <div
    class="cart d-flex align-items-center justify-content-center flex-column"
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
    <h2 class="title">Корзина</h2>
    <p v-if="!cart_data.length">Корзина пуста...</p>
    <div class="items-container">
      <CartItem
        class="item"
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
        @increment="increment(index)"
        @decrement="decrement(index)"
      />
    </div>
    <div class="cart-total">
      <p>К оплате:</p>
      <p class="text-bold">{{ cartTotalCost }} ₽</p>
      <b-button v-if="!cart_data.length" class="pay-disabled" size="sm" disabled
        >Оплатить</b-button
      >
      <b-button v-else class="pay" size="sm">Оплатить</b-button>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import { mapActions } from "vuex";
export default {
  name: "Cart",
  components: {
    CartItem
  },
  props: {
    cart_data: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions([
      "DELETE_FROM_CART",
      "INCREMENT_CART_ITEM",
      "DECREMENT_CART_ITEM"
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index);
    },
    increment(index) {
      this.INCREMENT_CART_ITEM(index);
    },
    decrement(index) {
      this.DECREMENT_CART_ITEM(index);
    }
  },
  computed: {
    cartTotalCost() {
      let result = [];
      if (this.cart_data.length) {
        for (let item of this.cart_data) {
          result.push(item.price * item.quantity);
        }
        result = result.reduce(function(sum, el) {
          return sum + el;
        });
        return result;
      } else {
        return 0;
      }
    }
  }
};
</script>

<style scoped>
.cart {
  width: 90%;
  min-height: calc(100vh - 230px);
}

.to-catalog {
  position: absolute;
  left: 30px;
  top: 150px;
  padding: 5px 10px;
}

.title {
  margin: 150px 0 50px 0;
}

.link {
  cursor: pointer;
  color: #5e616a;
  text-decoration: none;
}

.link:hover {
  color: darkgray;
}

.cart-total {
  position: absolute;
  top: 280px;
  right: 20px;
  width: 200px;
  background-color: #e2dcd5;
  padding: 10px;
}

.items-container {
  width: 900px;
  margin-right: 200px;
}

.text-bold {
  font-weight: bold;
}

.pay {
  background-color: #a3b4a0;
  color: #5e616a;
  border-color: #a3b4a0;
  margin-top: 30px;
  font-weight: bold;
  font-size: 18px;
}

.pay-disabled {
  background-color: #a3b4a0;
  color: #5e616a;
  border-color: #a3b4a0;
  margin-top: 30px;
  font-weight: bold;
  font-size: 18px;
}

.pay:hover {
  background-color: #81af7b;
  color: white;
  border-color: #81af7b;
}

.icon {
  margin-right: 5px;
}
</style>
