<template>
  <div class="type">
    <ul>
      <li :class="type==='-'&&'selected'" @click="changeType('-')">支出</li>
      <li :class="type==='+'&&'selected'" @click="changeType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="js">

export default {
  name: 'Type',
  data() {
    return {
      type: '-'//-号代表支出，+号代表收入
    }
  },
  methods: {
    changeType(type) {
      this.type = type
    }
  }
}
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