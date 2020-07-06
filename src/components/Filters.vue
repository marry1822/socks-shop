<template>
  <div
    class="filters d-flex flex-row justify-content-center align-items-center flex-wrap"
  >
    <div class="select">
      <p class="name">Категория:</p>
      <b-form-select
        v-model="selected"
        :selected="selected"
        @select="onSelectChange"
      >
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
  //в data создала тоже значения, которые использую в селекте и инпуте
  data: () => ({
    selectedCategory: 0,
    minimalPrice: 0,
    maximumPrice: 300
  }),
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
  },
  watch: {
    selected: function() {
      //не знаю, что писать
      console.log("Selected changed to: ", this.selected);
    }
  },
  methods: {
    reset() {
      //здесь по идее тоже нельзя использовать пропсы
      (this.selected = 0), (this.minPrice = 0), (this.max = 300);
    },
    onSelectChange(option) {
      this.$emit("onCategoryChange", option);
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
