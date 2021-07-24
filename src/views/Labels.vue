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
      <button class="createButton" @click="createTag">新建标签</button>
    </div>
  </Layout>
</template>
<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel";
tagListModel.fetch();
@Component
export default class Labels extends Vue {
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      tagListModel.create(name);
    }
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