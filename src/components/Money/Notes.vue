<template>
  <div class="notes">
    <label
    >{{this.filename}}
      <input type="text" v-model="value" :placeholder="this.placeholder"/>
    </label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class Type extends Vue {
  @Prop() filename!: string;
  @Prop() placeholder?:string
  value = '';

  @Watch('value')

  onValueChange(value: string) {
    this.$emit('update:value', value);
  }
}
</script>

<style lang='scss' scoped>
.notes {
  font-size: 14px;
  //background: rgb(245, 245, 245);

  > label {
    padding: 0 15px;

    > input {
      height: 64px;
      border: none;
      background: inherit;
      margin-left: 10px;
    }
  }
}
</style>