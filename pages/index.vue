<template>
  <main class="page">
    <h1 class="page__title">Cursos</h1>
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
.page {
  @include page-style;
  &__title {
    @include title;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
}
</style>
