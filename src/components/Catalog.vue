<template>
  <div class="catalog d-flex flex-wrap justify-content-center">
    <Filters
      :options="categories"
      :selected="selected"
      :minPrice="minPrice"
      :maxPrice="maxPrice"
      @onCategoryChange="onCategoryChange"
      @onMinPriceChange="onMinPriceChange"
      @onMaxPriceChange="onMaxPriceChange"
      @reset="reset"
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
    items: [],
    categories: [
      { text: "Все", value: 0 },
      { text: "Мужские", value: 1 },
      { text: "Женские", value: 2 },
      { text: "Унисекс", value: 3 }
    ],
    selected: "Все",
    minPrice: 0,
    maxPrice: 300
  }),
  components: {
    CatalogItem,
    Filters
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API().then(response => {
      this.items = response.data;
    });
  },
  methods: {
    ...mapActions(["GET_PRODUCTS_FROM_API", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
    onCategoryChange(category) {
      this.selected = category;
    },
    onMinPriceChange(price) {
      this.minPrice = price;
    },
    onMaxPriceChange(price) {
      this.maxPrice = price;
    },
    reset() {
      (this.selected = "Все"), (this.minPrice = 0), (this.maxPrice = 300);
    }
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts() {
      let filtered = this.items
        .filter(item => {
          return this.selected == "Все" || this.selected == item.category;
        })
        .filter(item => {
          return item.price >= this.minPrice && item.price <= this.maxPrice;
        });
      return filtered;
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
</style>
