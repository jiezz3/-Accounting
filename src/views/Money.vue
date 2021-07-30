<template>

  <Layout class-prefix="layout">
    {{record}}
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
import tagListModel from '@/models/tagListModel';
const tagList=tagListModel.fetch()
const recordList = recordListModel.fetch();
@Component({
  components: {NumberPad, Type, Notes, Tags},
})
export default class Money extends Vue {
  tags = tagList
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
    const record2 = JSON.parse(JSON.stringify(this.record));
    record2.creatAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordListChange() {
    recordListModel.save(this.recordList);
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

