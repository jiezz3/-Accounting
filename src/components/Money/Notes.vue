<template>
  <div class="notes">
    <label
    >备注：
      <input type="text"/>
    </label>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Notes'
};
</script>

<style lang='scss' scoped>
.notes {
  font-size: 14px;
  background: rgb(245, 245, 245);

  > label {
    padding: 0 15px;

    > input {
      height: 64px;
      border: none;
      background: inherit;
    }
  }
}
</style>