<template>
  <div id="app">
    <Header />
    <MainWrapper />
    <Footer />
  </div>
</template>

<script>
import MainWrapper from "@/components/MainWrapper";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "App",
  components: {
    MainWrapper,
    Header,
    Footer
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #5e616a;
}
</style>
