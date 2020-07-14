<template>
  <div></div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Notifier",
  computed: {
    ...mapGetters(["lastMessage"])
  },
  watch: {
    lastMessage: "showMessage"
  },
  methods: {
    showMessage(value) {
      this.$bvToast.toast(value.message, {...value});
      console.log(value)
    }
  }
};
</script>
