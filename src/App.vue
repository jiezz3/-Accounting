<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "src/assets/style/reset.scss";
@import "src/assets/style/helper.scss";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-family: $font-hei;
  line-height: 1.5;
  font-size: 16px;
}
</style>
