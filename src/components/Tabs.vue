<template>
  <ul class="tabs">
    <li @click="select(item)" v-for="item in dataSource"
        :key="item.value" :class="{selected:item.value===value,
        [classPrefix+'-item']:classPrefix}">{{ item.text }}
    </li>
  </ul>
</template>

<script lang='ts'>
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
type dataSourceItem={text:string,value:string }
@Component
export default class Tabs extends Vue {
  @Prop({required:true,type:Array})
  dataSource!: dataSourceItem[]
  @Prop(String) value!:string
  @Prop(String) classPrefix?:string

  select(item:dataSourceItem){
this.$emit('update:value',item.value)
  }
}
</script>

<style lang='scss' scoped>
.tabs {
  background: rgb(196, 196, 196);
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
</style>