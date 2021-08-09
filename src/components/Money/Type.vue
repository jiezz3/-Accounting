<template>
  <div class="type">
    <ul>
      <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='-'}"
          @click="changeType('-')">支出</li>
      <li :class="{[classPrefix+'-item']:classPrefix,selected:value==='+'}"
          @click="changeType('+')">收入</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Type extends Vue {
     @Prop(String) value!:string
  @Prop(String) classPrefix?:string
  changeType(type: string) {
    if (type !== '+' && type !== '-') {
      throw new Error('type is unknown');
    }
    this.$emit("update:value",type)
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