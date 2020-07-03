<template>
  <div class="catalog-item">
    <b-modal
      id="modal-1"
      :busy="true"
      :title="product_data.name"
      v-model="modalShow"
      :modal-footer="product_data.price"
      hide-footer
    >
      <img
        :src="require('../assets/images/' + product_data.image)"
        width="100%"
      />
      <template>
        <div
          class="info d-flex flex-column align-items-center justify-content-center"
        >
          <p>Материал: {{ product_data.material }}</p>
          <p>Категория: {{ product_data.category }}</p>
          <p>Размер: {{ product_data.size }}</p>
          <p>Цена: {{ product_data.price }} ₽</p>
        </div>
      </template>
    </b-modal>
    <img
      class="item-image"
      :src="require('../assets/images/' + product_data.image)"
      alt="img"
      @click="modalShow = !modalShow"
    />
    <p class="item-name">{{ product_data.name }}</p>
    <p class="item-price">{{ product_data.price }} ₽</p>
    <b-button class="add-to-cart" size="sm" @click="addToCart"
      >В корзину</b-button
    >
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
  data: () => ({
    modalShow: false
  }),
  props: {
    product_data: {
      type: Object,
      default: () => {}
    }
  },
  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    }
  }
};
</script>

<style scoped>
.catalog-item {
  padding: 20px;
  border: #e2dcd5;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 20px;
  box-shadow: 0 13px 27px rgba(0, 0, 0, 0.2);
}

.item-image {
  width: 100%;
  cursor: pointer;
}

.item-price {
  font-weight: bold;
}

p {
  padding: 0px;
  margin: 10px 0;
}

.add-to-cart {
  background-color: #e2dcd5;
  color: #5e616a;
  border-color: #c5c0ba;
  flex-basis: 25%;
}

.add-to-cart:hover {
  background-color: #c5c0ba;
  color: white;
  border-color: #c5c0ba;
}

.info {
  color: #5e616a;
}
</style>
