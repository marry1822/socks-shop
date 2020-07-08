<template>
  <div
    class="filters d-flex flex-row justify-content-center align-items-center flex-wrap"
  >
    <div class="select">
      <p class="name">Категория:</p>
      <b-form-select :value="selected" @input="onSelectChange">
        <b-form-select-option
          v-for="option in options"
          :key="option.text"
          :value="option.text"
          >{{ option.text }}</b-form-select-option
        >
      </b-form-select>
    </div>
    <div class="price-input">
      <p class="name">Цена:</p>
      <div
        class="price-input-container d-flex justify-content-between align-items-center"
      >
        <b-form-input
          class="price"
          :value="minPrice"
          type="number"
          @input="onMinPriceChange"
        ></b-form-input>
        <b-form-input
          class="price"
          :value="maxPrice"
          type="number"
          @input="onMaxPriceChange"
        ></b-form-input>
        <p class="currency">₽</p>
      </div>
    </div>
    <b-button class="reset" size="sm" variant="outline-secondary" @click="reset"
      >Сбросить фильтры</b-button
    >
  </div>
</template>

<script>
export default {
  name: "Filters",
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: String,
      default: ""
    },
    minPrice: {
      type: Number,
      default: 0
    },
    maxPrice: {
      type: Number,
      default: 300
    }
  },
  methods: {
    reset() {
      this.$emit("reset");
    },
    onSelectChange(option) {
      this.$emit("onCategoryChange", option);
    },
    onMinPriceChange(price) {
      this.$emit("onMinPriceChange", price);
    },
    onMaxPriceChange(price) {
      this.$emit("onMaxPriceChange", price);
    }
  }
};
</script>

<style scoped>
.filters {
  margin: 50px 0;
  padding-bottom: 20px;
  border-bottom: solid 1px #e2dcd5;
}

.select {
  width: 150px;
  margin-right: 50px;
}

.title {
  border: solid 1px #e2dcd5;
  padding: 8px;
  cursor: pointer;
}

.price-input {
  width: 200px;
  margin-right: 50px;
}

.name {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
}

.price {
  text-align: center;
  margin: 0 5px;
}

.currency {
  margin: 0;
}

.reset {
  height: 38px;
  margin-top: 35px;
}
</style>
