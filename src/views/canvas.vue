<template>
  <div>
      <canvas ref="canva"></canvas>
  </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.$refs('canva'));
    }
}
</script>

<style>

</style>