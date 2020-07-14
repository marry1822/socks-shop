<template>
  <div class="main-wrapper d-flex align-items-center justify-content-center">
    <Notifier />
    <router-view></router-view>
  </div>
</template>

<script>
import Notifier from "@/components/Notification.vue";
export default {
  name: "MainWrapper",
  components: {
    Notifier
  }
};
</script>
