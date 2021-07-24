<template>
  <Layout>
    <div>
      <Icon name="left" />
      编辑标签</div>
   <Notes filename="标签" placeholder="在这里输入标签名"/>
  </Layout>
</template>

<script lang='ts'>
import tagListModel from '@/models/tagListModel';
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Notes from '@/components/Money/Notes.vue';
@Component({
  components: {Notes}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    const tag = tags.filter((item) => item.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('404');
    }
  }
}
</script>

<style lang='scss' scoped>
</style>