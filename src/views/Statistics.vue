<template>
  <div>
    <Layout>
      <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
     <ol>
       <li v-for="(group,index) in groupedList" :key="index">
       <h3 class="title">{{ time(group.title) }} <span>￥{{group.total}}</span></h3>
        <ol>
          <li class="record" v-for="item in group.items" :key="item.id">
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
import dayjs from 'dayjs';
import clone from '@/lib/clone';
@Component({
  components:{Tabs}
})
export default class Statistics extends Vue{
  time(string:string){
    const day =dayjs(string)
    const now =dayjs()
    if(day.isSame(now,'day')){
      return '今天'
    }else if(day.isSame(now.subtract(1,'day'),'day')){
      return '昨天'
    }else if(day.isSame(now.subtract(2,'day'),'day')){
      return '前天'
    }else if(day.isSame(now,'year')){
      now.format('M月D日')
    }else{
      now.format('YYYY年M月D日')
    }
  }
  tagString(tags:Tag[]){
    console.log(tags)
   const aaa= tags.join(',')
    console.log(aaa);
    return tags.length===0?'无':tags.join(',')
  }
  get recordList(){
    return (this.$store.state as RootState).recordList
  }
  get groupedList() {
    const {recordList} = this;
    if (recordList.length === 0) {return [];}
    const newList = clone(recordList)
        .filter(r => r.type === this.type)
        .sort((a, b) => dayjs(b.creatAt).valueOf() - dayjs(a.creatAt).valueOf());
    type Result = { title: string, total?: number, items: RecordItem[] }[]
    const result: Result = [{title: dayjs(newList[0].creatAt).format('YYYY-MM-DD'), items: [newList[0]]}];
    for (let i = 1; i < newList.length; i++) {
      const current = newList[i];
      const last = result[result.length - 1];
      if (dayjs(last.title).isSame(dayjs(current.creatAt), 'day')) {
        last.items.push(current);
      } else {
        result.push({title: dayjs(current.creatAt).format('YYYY-MM-DD'), items: [current]});
      }
    }
    result.map(group => {
      group.total = group.items.reduce((sum, item) => {
        console.log(sum);
        console.log(item);
        return sum + item.amount;
      }, 0);
    });
    return result;
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

