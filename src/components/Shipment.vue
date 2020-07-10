<template>
  <div
    class="shipment-info d-flex align-items-center justify-content-center flex-column"
  >
    <router-link
      class="link"
      :to="{
        name: 'catalog'
      }"
    >
      <a class="to-catalog link"><b-icon
          class="icon"
          icon="arrow-left"
          scale="1.25"
          shift-v="1.25"
          aria-hidden="true"
        ></b-icon
        >В каталог</a>
    </router-link>
    <h1 class="title">Доставка</h1>
    <p>Самовывоз с 1-го Муринского проспекта дом 1</p>
    <p>БЕСПЛАТНО</p>
  </div>
</template>

<script>
export default {
  name: "Shipment"
};
</script>

<style scoped>
.shipment-info {
  /* margin-top: 150px; */
  height: 70vh;
  color: #5e616a;
}

.title {
  margin: 50px 0;
}

.to-catalog {
  position: absolute;
  left: 30px;
  top: 150px;
  padding: 5px 10px;
}

.link {
  cursor: pointer;
  color: #5e616a;
  text-decoration: none;
}

.link:hover {
  color: darkgray;
}

.icon{
  margin-right: 5px;
}
</style>
