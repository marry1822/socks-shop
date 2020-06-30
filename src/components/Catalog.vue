<template>
  <div class="catalog justify-content-between">
    <h1 class="title catalog-title">Каталог</h1>
    <Filters
      :options="categories"
      :selected="selected"
      @select="sortByCategory"
    />
    <BRow>
      <BCol cols="4" v-for="product in filteredProducts" :key="product.article">
        <CatalogItem :product_data="product" @addToCart="addToCart" />
      </BCol>
    </BRow>
  </div>
</template>

<script>
import CatalogItem from "./CatalogItem";
import Filters from "./Filters";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Catalog",
  data: () => ({
    selected: "Все",
    categories: [
      { name: "Все", value: "all" },
      { name: "Мужские", value: "m" },
      { name: "Женские", value: "f" },
      { name: "Унисекс", value: "u" }
    ],
    sortedProducts: []
  }),
  components: {
    CatalogItem,
    Filters
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API();
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    sortByCategory(category) {
      this.sortedProducts = [];
      this.PRODUCTS.map(item => {
        if (item.category === category.name) {
          this.sortedProducts.push(item);
        }
      });
      this.selected = category.name;
    }
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts() {
      if (this.sortedProducts.length) {
        console.log(this.sortedProducts.length);
        return this.sortedProducts;
      } else {
        return this.PRODUCTS;
      }
    }
  }
};
</script>

<style scoped>
.catalog {
  width: 1100px;
  margin-top: 150px;
  color: #5e616a;
}

.title {
  margin: 50px 0;
}
</style>
