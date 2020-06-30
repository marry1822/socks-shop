<template>
  <div
    class="cart-item d-flex flex-row align-items-center justify-content-between flex-nowrap"
  >
    <img
      class="cart-image"
      :src="require('../assets/images/' + cart_item_data.image)"
      alt="cart-img"
    />
    <div class="cart-item-info d-flex flex-column align-items-center">
      <p class="text-bold">{{ cart_item_data.name }}</p>
      <p>Материал: {{ cart_item_data.material }}</p>
      <p>Размер: {{ cart_item_data.size }}</p>
      <p class="text-bold">Цена: {{ cart_item_data.price }} ₽</p>
    </div>
    <div class="cart-item-quantity">
      <p>Кол-во:</p>
      <b-button class="inc-dec" size="sm" @click="decrement" pill> - </b-button>
      <span> {{ cart_item_data.quantity }} </span>
      <b-button class="inc-dec" size="sm" @click="increment" pill> + </b-button>
    </div>
    <b-button class="delete" @click="deleteFromCart">Удалить</b-button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    cart_item_data: {
      type: Object,
      default: () => {}
    }
  },

  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
    decrement() {
      this.$emit("decrement");
    },
    increment() {
      this.$emit("increment");
    }
  }
};
</script>

<style scoped>
.cart-image {
  width: 100px;
}

.cart-item {
  width: 900px;
  margin: 30px 0;
}

.text-bold {
  font-weight: bold;
}

.delete {
  background-color: #dbbcbf;
  color: #5e616a;
  border-color: #dbbcbf;
  font-weight: bold;
}
.delete:hover {
  background-color: #ad575f;
  color: white;
  border-color: #ad575f;
}

.inc-dec {
  background-color: transparent;
  color: #5e616a;
  border-color: #5e616a;
}

.inc-dec:hover {
  background-color: #e2dcd5;
  color: white;
  border-color: #e2dcd5;
}
</style>
