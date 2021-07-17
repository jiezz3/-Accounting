<template>
  <div class="type">
    <ul>
      <li class="selected">支出</li>
      <li>收入</li>
    </ul>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Type'
};
</script>

<style lang='scss' scoped>
.type {
  background: rgb(196, 196, 196);

  > ul {
    display: flex;

    > li {
      width: 50%;
      display: flex;
      justify-content: center;
      padding: 22px;
      position: relative;

      &.selected::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 4px;
        width: 100%;
        background: #333;
      }
    }
  }
}
</style>