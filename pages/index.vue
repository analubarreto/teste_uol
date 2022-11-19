<template>
  <main>
    <h1>Conteúdo</h1>
    <ContentList :contents="contents" />
  </main>
</template>

<script>
import contentsQuery from '~/apollo/queries/content/contents.gql'
import ContentList from '~/components/Content/ContentList.vue';

export default {
  name: 'IndexPage',
  comments: {
    ContentList
  },
  apollo: {
    contents: {
      prefetch: true,
      query: contentsQuery
    }
  }
}
</script>

<style scoped lang="scss">
</style>
