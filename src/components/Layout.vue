<template>
  <div class="nav-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script lang='ts'>
export default {
  props: ["classPrefix"],
};
</script>
<style lang="scss" scoped>
.content {
  flex-grow: 1;
}
.nav-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
}
</style> 
