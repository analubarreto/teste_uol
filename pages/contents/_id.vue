<template>
  <main>
    <p>{{ `Something` }}</p>
  </main>
</template>

<script>
import contentsQuery from '~/apollo/queries/content/content.gql'

export default {
  Name: 'Single content page',
  asyncData({ params }) {
    const contentId = params.id // When calling /abc the slug will be "abc"
    return { contentId }
  },
  apollo: {
    content: {
      prefetch: true,
      query: contentsQuery,
      variables() {
        return { id: this.$route.params.id }
      }
    }
  },

}
</script>

<style scoped lang="scss">
.page {
  @include page-style;
}
</style>
