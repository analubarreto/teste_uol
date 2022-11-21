<template>
  <div>
    <LoadingComponent :is-showing="isContentLoading" />
    <main id="main-content">
      <h1>Conteúdo</h1>
      <ContentList :contents="contents" />
    </main>
  </div>
</template>

<script>
import contentsQuery from '~/apollo/queries/content/contents.gql'
import ContentList from '~/components/Content/ContentList.vue';
import LoadingComponent from '~/components/Layout/LoadingComponent.vue';

export default {
  name: 'IndexPage',
  components: {
    ContentList,
    LoadingComponent
  },
  data() {
    return {
      contents: []
    }
  },
  apollo: {
    contents: {
      prefetch: true,
      query: contentsQuery
    }
  },
  computed: {
    isContentLoading() {
      return Object.keys(this.contents).length === 0;
    }
  }
}
</script>

<style scoped lang="scss">
</style>
