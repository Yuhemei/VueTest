<template>
  <div>
      <!-- 对象语法 -->
    <div v-bind:class="{ active: isActive }"></div>
    <div v-bind:class="classObject"></div>
    <!-- 数组语法 -->
    <div v-bind:class="[activeClass, errorClass]"></div>
    <div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
    <div v-bind:class="[{ active: isActive }, errorClass]"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      error: null,
      
    };
  },
  computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
};
</script>

<style>
</style>