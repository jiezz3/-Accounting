<template>
  <div class="nav-warpper">
    <div class="content">
      <slot />
    </div>
    <Nav />
  </div>
</template>

<script>
export default {};
</script>
<style lang="scss" scoped>
.content {
  flex-grow: 1;
}
.nav-warpper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
}
</style> 
