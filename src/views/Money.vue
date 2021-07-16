<template>
  <div class="money">
    <div class="content">
      <p>monery</p>
      <p>monery</p>
      <p>monery</p>
      <p>monery</p>
      <p>monery</p>
      <p>monery</p>
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
.money {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: auto;
}
</style> 

