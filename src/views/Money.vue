<template>
  <Layout class-prefix="layout">{{ record }}
    <Tags :tag-name.sync="tags" @update:selected="updateTags"/>
    <Notes @update:value="updateNotes"/>
    <Type :value.sync="record.type"/>
    <numberPad @update:output="updateOutput"/>

  </Layout>
</template>

<script lang="ts">

import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Type from '@/components/Money/Type.vue';
import NumberPad from '@/components/Money/numberPad.vue';

type Record = {
  tags: string[]
  notes: string
  type: string
  amount: number
}
@Component({
  components: {NumberPad, Type, Notes, Tags},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  record: Record = {
    tags: [], notes: '', type: '+', amount: 0
  };

  updateTags(value: string[]) {
    this.record.tags = value;
  }

  updateNotes(value: string) {
    this.record.notes = value;
  }

  updateOutput(value: string) {
    this.record.amount = parseFloat(value);
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

