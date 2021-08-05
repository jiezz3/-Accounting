<template>

  <Layout class-prefix="layout">
    <Tags />
    <Notes filename="备注" placeholder="在这里输入备注" @update:value="updateNotes"/>
    <Type :value.sync="record.type"/>
    <numberPad :value.sync="record.amount" @submit="getList"/>

  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Type from '@/components/Money/Type.vue';
import NumberPad from '@/components/Money/numberPad.vue';
@Component({
  components: {NumberPad, Type, Notes, Tags},
})
export default class Money extends Vue {
  tags = window.tagList;
  record: RecordItem = {
    tags: [], notes: '', type: '+', amount: 0,
  };
  recordList: RecordItem[] = window.recordList;



  updateNotes(value: string) {
    this.record.notes = value;
  }

  getList() {
   window.createRecord(this.record)
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

