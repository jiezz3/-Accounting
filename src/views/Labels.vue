<template>
  <Layout>
    <div class="listWrapper">
      <router-link
        class="list"
        v-for="tag in tags"
        :key="tag.id"
        :to="`/labels/edit/${tag.id}`"
        ><span>{{ tag.name }}</span>
        <Icon name="right" />
      </router-link>
    </div>
    <div class="buttonWrapper">
      <Button class="createButton" @click="createTag">新建标签</Button>
    </div>
  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Button from '@/components/Button.vue';
@Component({
  components: {Button},
})
export default class Labels extends Vue {
  get tags(){
    return this.$store.state.tagList
  }
  created(){
    this.$store.commit('fetchTags')
  }
  createTag() {
    const name=window.prompt("新增请输入标签名")
    if(!name){return window.alert('不能为空')}
    this.$store.commit('createTag',name)
    }
}
</script>

<style lang="scss" scoped>
.listWrapper {
  font-size: 16px;
  background: white;

  > .list {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 16px;
    //border-bottom: 1px solid #999;
    border-bottom: 1px solid #999999;
  }

  svg {
    width: 18px;
    height: 18px;
    margin-right: 16px;
  }
}

.buttonWrapper {
  text-align: center;
  padding-top: 30px;
  > .createButton {
    background: #767676;
    border-radius: 4px;
    color: white;
    border: none;
    padding: 0 16px;
    height: 40px;
  }
}
</style>