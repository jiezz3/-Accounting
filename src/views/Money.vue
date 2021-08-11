<template>

  <Layout class-prefix="layout">
    <Tags @update:selected="record.tags=$event"/>
    <Notes filename="备注" placeholder="在这里输入备注" @update:value="updateNotes"/>
    <Tabs :data-source="recordTypeList" :value.sync="record.type"/>
    <numberPad :value.sync="record.amount" @submit="saveRecord"/>

  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import NumberPad from '@/components/Money/numberPad.vue';
import recordTypeList from '@/constants/recordTypeList';
import Tabs from '@/components/Tabs.vue';

@Component({
  components: {Tabs, NumberPad, Notes, Tags},
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }

  recordTypeList = recordTypeList

  record: RecordItem = {
    tags: [], notes: '', type: '+', amount: 0,
  };
  created(){
    this.$store.commit('fetchRecord')
  }
  updateNotes(value: string) {
    this.record.notes = value;
  }

  saveRecord() {
    console.log(this.record)
    this.$store.commit('createRecord', this.record);
  }
}
</script>
<style>
.layout-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
</style>
<style lang="scss" scoped>

</style> 

