<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>
    <div class="new"><button>新增标签</button></div>
  </div>
</template>

<script lang='ts'>
export default {
  name: 'Tags'
};
</script>

<style lang='scss' scoped>
.tags {
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  > .current {
    display: flex;
    flex-wrap: wrap;
    > li {
      background: rgb(217, 217, 217);
      padding: 0 16px;
      height: 24px;
      $height: 24px;
      border-radius: $height/2;
      margin: 6px;
      display: flex;
      align-content: center;
    }
  }
  > .new {
    > button {
      padding: 0 5px;
      background: transparent;
      border: none;
      border-bottom: 1px solid #999;
      color: #999;
      margin: 12px;
    }
  }
}
</style>