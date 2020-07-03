<template>
  <div class="catalog d-flex flex-wrap justify-content-center">
    <!-- <h1 class="title catalog-title">Каталог</h1> -->
    <Filters :options="categories" :selected="selected" />
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
      { text: "Мужские", value: 1 },
      { text: "Женские", value: 2 },
      { text: "Унисекс", value: 3 }
    ],
    selected: 0,
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
    }
  },
  computed: {
    ...mapGetters(["PRODUCTS", "CART"]),
    filteredProducts() {
      let filtered = this.items
        .filter(item => {
          console.log(item.category.value, this.selected);
          return this.selected == 0 || item.category.value === this.selected;
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

.title {
  margin: 50px 0;
}
</style>
