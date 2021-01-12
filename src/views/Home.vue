<template>
  <transition name="home">
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png" />
      <HelloWorld msg="Welcome to Your Vue.js App" />
    </div>
  </transition>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    HelloWorld,
  },
};
</script>
<style lang="less">
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter, .home-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>