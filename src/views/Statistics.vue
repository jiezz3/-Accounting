<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
      <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
     <ol>
       <li v-for="(group,index) in result" :key="index">
       <h3 class="title">{{ group.title }}</h3>
        <ol>
          <li class="record" v-for="(item,index) in group.items" :key="index">
           <span>{{tagString(item.tags)}}</span>
            <span class="notes" :style="{marginRight:'auto'}">{{item.notes}}</span>
            <span>￥{{item.amount}}</span>
          </li>
        </ol>
       </li>
     </ol>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tabs from '@/components/Tabs.vue';
import intervalList from '@/constants/intervalList';
import recordTypeList from '@/constants/recordTypeList';
@Component({
  components:{Tabs}
})
export default class Statistics extends Vue{
  tagString(tags:Tag[]){
    return tags.length===0?'无':tags.join(',')
  }
  get recordList(){
    return (this.$store.state as RootState).recordList
  }
  get result(){
    type HashTableValue={title:string,items:RecordItem[]}
    const {recordList}=this
    const hashTable:{[key:string]:HashTableValue} ={}
    for(let i = 0;i<recordList.length;i++){
     const [date,time]=recordList[i].creatAt!.split('T')
     hashTable[date]=hashTable[date]||{title:date,items:[]}
      hashTable[date].items.push(recordList[i])
    }
    return hashTable
  }
  type='-';
  interval='day'
  intervalList=intervalList
  recordTypeList=recordTypeList

  created(){
    this.$store.commit('fetchRecord')
  }
}
</script>

<style scoped lang="scss">
 ::v-deep {
   .type-item {
     background: white;

     &.selected {
       background: #c4c4c4;

       &::after {
         display: none;
       }
     }
   }
   .interval-item {
     height: 48px;
   }
 }
 %item{
   padding: 8px 16px;
   line-height: 24px;
   display:flex;
   justify-content: space-between;
   align-content: center;
 }
 .title{
@extend %item
 }
 .record{
   @extend %item;
   background: white;
 }
 .notes{
   margin-right:auto ;
   margin-left: 8px;
   color: #999999;
 }





</style>

