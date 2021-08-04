<template>

  <Layout class-prefix="layout">
    <Tags :tag-name.sync="tags" @update:selected="updateTags"/>
    <Notes filename="备注" placeholder="在这里输入备注" @update:value="updateNotes"/>
    <Type :value.sync="record.type"/>
    <numberPad :value.sync="record.amount" @submit="getList"/>

  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';

import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Type from '@/components/Money/Type.vue';
import NumberPad from '@/components/Money/numberPad.vue';
import recordListModel from '@/models/recordListModel';
const recordList = recordListModel.fetch();
@Component({
  components: {NumberPad, Type, Notes, Tags},
})
export default class Money extends Vue {
  tags = window.tagList;
  record: RecordItem = {
    tags: [], notes: '', type: '+', amount: 0,
  };
  recordList: RecordItem[] = recordList;

  updateTags(value: string[]) {
    this.record.tags = value;
  }

  updateNotes(value: string) {
    this.record.notes = value;
  }

  getList() {
    recordListModel.create(this.record)
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save();
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

