<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in tagName" :key="tag" @click="pick(tag)" :class="{selected:selectedTags.indexOf(tag)>=0}">
        {{ tag }}
      </li>
    </ul>
    <div class="new">
      <button @click="create">新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Type extends Vue {
  @Prop() tagName: string[] | undefined;
  selectedTags: string[] = [];

  pick(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (tag) {
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }

    }
  }
  create(){
    const name=window.prompt("新增请输入标签名")
    if(this.tagName)
    this.$emit('update:tagName',[...this.tagName,name])
  }
}
</script>

<style lang='scss' scoped>
.tags {
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  > .current {
    display: flex;
    flex-wrap: wrap;

    > li {
      $bg: rgb(217, 217, 217);
      background: $bg;
      padding: 0 16px;
      height: 24px;
      border-radius: 12px;
      margin: 6px;
      display: flex;
      align-content: center;

      &.selected {
        background: darken($bg, 25%);
        color: white;
      }
    }
  }

  > .new {
    > button {
      padding: 0 5px;
      background: transparent;
      border: none;
      border-bottom: 1px solid #999;
      color: #999;
      margin: 12px;
    }
  }
}
</style>