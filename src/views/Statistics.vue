<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    </Layout>
  </div>
</template>

<script lang="ts">
import Type from '@/components/Money/Type.vue';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
@Component({
  components:{Tabs, Type}
})
export default class Statistics extends Vue{
  type='-';
  interval='day'
  intervalList=[
    {
      text:'按天',value:'day'
    },
    {
      text:'按周',value:'week'
    },
    {
      text:'按月',value:'month'
    },
  ];
  typeList=[
    {text:'支出',value:'-'},
    {text: '收入',value: '+'}
  ]
}
</script>

<style scoped lang="scss">
 ::v-deep .type-item {
  background: white;
  &.selected{
    background:#c4c4c4;
    &::after{
      display: none;
    }
  }
}
</style>

