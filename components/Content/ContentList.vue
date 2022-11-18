<template>
  <el-row :gutter="10">
    <el-col v-for="content in contents" :key="content.id" class="col" :xs="24" :sm="12" :md="8" :lg="6" :xl="6">
      <ContentCard :content="content" />
    </el-col>
  </el-row>
</template>

<script>
import gql from 'graphql-tag';
import ContentCard from './ContentCard.vue';
export default {
  name: 'ContentList',
  components: {
    ContentCard
  },
  apollo: {
    contents: gql`query {
        contents {
        id,
        embeddable,
        allow_download,
        type,
        updated_at,
        created_at,
        title
      }
    }`
  }
}
</script>

<style scoped lang="scss">
.col {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
}
</style>
