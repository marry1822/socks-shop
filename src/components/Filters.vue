<template>
  <div class="filters d-flex flex-column">
    <div class="select">
      <p class="name">Категория:</p>
      <b-form-select v-model.number="selected" :selected="selected">
        <b-form-select-option :value="0">Все</b-form-select-option>
        <b-form-select-option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
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
          v-model.number="minPrice"
          type="number"
        ></b-form-input>
        <b-form-input
          class="price"
          v-model.number="maxPrice"
          type="number"
        ></b-form-input>
      </div>
    </div>
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
      type: Number,
      default: 0
    },
    minPrice: {
      type: Number,
      default: 0
    },
    maxPrice: {
      type: Number,
      default: 300
    }
  }
};
</script>

<style scoped>
.select {
  width: 150px;
  position: fixed;
  left: 30px;
  top: 400px;
}

.title {
  border: solid 1px #e2dcd5;
  padding: 8px;
  cursor: pointer;
}

.options {
  border: solid 1px #e2dcd5;
  background: #ffffff;
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  padding: 8px;
  cursor: pointer;
}

.options p:hover {
  background: #e2dcd5;
}

.price-input {
  width: 150px;
  position: fixed;
  left: 30px;
  top: 300px;
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
</style>
