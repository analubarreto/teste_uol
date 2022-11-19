<template>
  <main>
    <p>{{ `Something` }}</p>
  </main>
</template>

<script>
import contentsQuery from '~/apollo/queries/content/content.gql'

export default {
  Name: 'SingleContentPage',
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
</style>
