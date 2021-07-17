<template>
  <Layout class-prefix="layout">
    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new"><button>新增标签</button></div>
    </div>

    <div class="notes">
      <label
        >备注：
        <input type="text" />
      </label>
    </div>
    <div class="type">
      <ul>
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>
    <div class="numberPad">
      <div class="number">100</div>
      <div class="button">
        <button>1</button><button>2</button><button>3</button
        ><button>删除</button><button>4</button><button>5</button
        ><button>6</button><button>清空</button><button>7</button
        ><button>8</button><button>9</button><button class="ok">OK</button
        ><button class="zero">0</button><button>.</button>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {};
</script>
<style>
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

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
      border-radius: (24px/2);
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
.numberPad {
  > .number {
    @extend %innerShadow;
    font-size: 36px;
    display: flex;
    justify-content: flex-end;
    padding: 9px 16px;
    font-family: Consolas, monospace;
  }
  .button {
    @extend %clearfix;
    > button {
      font-size: 18px;
      width: 25%;
      height: 64px;
      float: left;
      background: transparent;
      border: none;
      $bg: #f2f2f2;
      &.ok {
        height: 64 * 2px;
        float: right;
        background: darken($bg, 4% * 6);
      }
      &.zero {
        width: 25% * 2;
      }

      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2),
      &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9) {
        background: darken($bg, 4% * 2);
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10),
      &:nth-child(13) {
        background: darken($bg, 4% * 3);
      }
      &:nth-child(8),
      &:nth-child(11) {
        background: darken($bg, 4% * 4);
      }
      &:nth-child(14) {
        background: darken($bg, 4% * 5);
      }
    }
  }
}
</style> 

