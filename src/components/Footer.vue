<template>
  <footer class="footer" id="contacts">
    <div
      class="footer-container d-flex align-items-center justify-content-center"
    >
      <span>Contact us:</span>
      <BNav class="footer-nav">
        <a
          v-for="(icon, index) in icons"
          :key="index"
          :href="icon.href"
          target="_blank"
          ><img :src="icon.image"
        /></a>
      </BNav>
      <span>© 2020 BUYwithMARY </span>
    </div>
  </footer>
</template>

<script>
import icons from "@/store/footerIcons.js";

export default {
  name: "Footer",
  data: () => ({
    icons
  })
};
</script>

<style scoped>
.footer {
  background-color: #e2dcd5;
  padding-top: auto;
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0.5;
  margin-top: 100px;
}

.footer-container {
  max-width: 1170px;
  padding: 0 15px;
  margin: auto;
  height: 130px;
  flex-direction: column;
}

.footer-nav {
  margin: 10px;
}

.footer-nav a {
  margin: 10px;
  cursor: pointer;
}

.footer-nav img:hover {
  transform: scale(1.04);
  transition: all 0.4s ease;
}
</style>
