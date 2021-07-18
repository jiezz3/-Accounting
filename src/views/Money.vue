<template>
  <Layout class-prefix="layout">
    <Tags :tag-name.sync="tags" />
    <Notes/>
    <Type />
    <numberPad />

  </Layout>
</template>

<script >
import Tags from '@/components/Money/Tags'
import Notes from '@/components/Money/Notes'
import Type from '@/components/Money/Type'
import NumberPad from '@/components/Money/numberPad'

export default {
  components: {NumberPad, Type, Notes, Tags},
  data(){
    return{
      tags:['衣','食','住','行']
    }
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

