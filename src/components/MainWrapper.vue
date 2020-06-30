<template>
  <div class="main-wrapper d-flex align-items-center justify-content-center">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "MainWrapper"
};
</script>

<style scoped>
.main-wrapper {
  margin-left: 100px;
}
</style>
