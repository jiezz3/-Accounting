<template>
  <div class="numberPad">
    <div class="number">{{ output }}</div>
    <div class="button">
      <button @click="count">1</button>
      <button @click="count">2</button>
      <button @click="count">3</button>
      <button @click="deleteInput">删除</button>
      <button @click="count">4</button>
      <button @click="count">5</button>
      <button @click="count">6</button>
      <button @click="remove">清空</button>
      <button @click="count">7</button>
      <button @click="count">8</button>
      <button @click="count">9</button>
      <button @click="ok"
          class="ok">OK</button>
      <button @click="count" class="zero">0</button>
      <button @click="count">.</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Type extends Vue {

@Prop() value!:number
   output=this.value.toString()
  count(event: MouseEvent) {
    if (this.output.length >= 16) {return;}
    const button = event.target as HTMLButtonElement;
    const input = button.textContent as string;
    if (this.output === '0'  && input !== '.') {
      this.output = input;
      return;
    }
    if (this.output.indexOf('.') >= 0)
      if (input === '.') {
        return;
      }
    this.output += input;
  }
ok(){
  this.$emit("update:value",this.output)
  this.$emit('submit',this.output)
  window.alert("提交成功")
  this.output='0'
}
  deleteInput() {
    if (this.output.length <= 1) {
      this.output='0';
      return;
    }
    this.output = this.output.slice(0, -1);
  }

  remove() {
    this.output = '0';
  }
}
</script>

<style lang='scss' scoped>
@import "../../assets/style/helper";
@import "../../assets/style/reset";

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