<template>
  <div class="select">
    <p class="select-name">Категория:</p>
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">
      {{ selected }}
    </p>
    <div class="options" v-if="areOptionsVisible">
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >
        {{ option.name }}
      </p>
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
      type: String,
      default: ""
    }
  },
  data() {
    return {
      areOptionsVisible: false
    };
  },
  methods: {
    selectOption(option) {
      this.$emit("select", option);
      this.areOptionsVisible = false;
    },
    hideSelect() {
      this.areOptionsVisible = false;
    }
  },
  mounted() {
    document.addEventListener("click", this.hideSelect.bind(this), true);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.hideSelect);
  }
};
</script>

<style scoped>
.select {
  width: 150px;
  position: fixed;
  left: 30px;
  top: 290px;
}

.select-name {
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left;
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
</style>
