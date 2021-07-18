<template>
  <div class="notes">
    <label
    >备注：
      <input  type="text" v-model="value"  placeholder="请在这里输入备注"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

@Component
export default class Type extends Vue {
  value = '';
  @Watch('value')
  onValueChange(value:string){
    this.$emit("update:value",value)
  }
}
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