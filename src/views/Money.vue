<template>
  <Layout class-prefix="layout">
    <Tags :tag-name.sync="tags" @update:selected="updateTags"/>
    <Notes @update:value="updateNotes"/>
    <Type @update:type="updateType"/>
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

@Component({
  components:{NumberPad, Type, Notes, Tags},
})
export default class Money extends Vue {
  tags = ['衣', '食', '住', '行'];
  updateTags(value:string[]){
    console.log(value);
  }
  updateNotes(value:string){
    console.log(value);
  }
  updateType(value:string){
    console.log(value);
  }
  updateOutput(value:string){
    console.log(value);
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

