<template>
  <main>
    <p>{{ `Something` }}</p>
  </main>
</template>

<script>
import gql from 'graphql-tag';

export default {
  Name: 'Single content page',
  asyncData({ params }) {
    const contentId = params.singleContentId // When calling /abc the slug will be "abc"
    return { contentId }
  },
  apollo: {
    content: gql`query {
      getContent(id: "593e3e34-311f-4531-82b5-bb4a89637930") {
        embeddable,
        allow_download,
        type,
        updated_at,
        created_at,
        title
      }
    }`
  },

}
</script>

<style scoped lang="scss">
.page {
  @include page-style;
}
</style>
