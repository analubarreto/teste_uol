<template>
  <div>
    <LoadingComponent :is-showing="isContentLoading" />
    <main v-if="!isContentLoading" class="content-page">
      <ContentPageHeader :content="getContent" />
      <section id="main-content" class="content-page__content">
        <SingleContent :content="getContent" />
      </section>
    </main>
  </div>
</template>

<script>
import contentsQuery from '~/apollo/queries/content/content.gql';
import LoadingComponent from '~/components/Layout/LoadingComponent.vue';
import ContentPageHeader from '~/components/Content/ContentPageHeader.vue';
import SingleContent from '~/components/Content/SingleContent.vue';

export default {
  Name: 'SingleContentPage',
  components: {
    LoadingComponent,
    ContentPageHeader,
    SingleContent
  },
  data() {
    return {
      getContent: {}
    }
  },
  apollo: {
    getContent: {
      prefetch: true,
      query: contentsQuery,
      variables() {
        return { id: this.$route.params.id }
      }
    }
  },
  computed: {
    isContentLoading() {
      return Object.keys(this.getContent).length === 0;
    }
  }
}
</script>

<style scoped lang="scss">
.content-page {
  position: relative;
  &__content {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    @include xl {
      width: 75%;
    }
    @include lg {
      width: 75%;
    }
    &--video {
      border-radius: 1rem;
      width: 100%;
      height: 25vh;
      @include xl {
        width: 80%;
        height: 75vh;
      }
      @include lg {
        width: 80%;
        height: 75vh;
      }
      @include sm {
        width: 100%;
      }
    }
    &--image {
      border-radius: 1rem;
    }
    &--link {
      &:link, &:visited, &:hover, &:active {
        text-decoration: none;
        color: $purple;
      }
    }
    &--document {
      @extend .content-page__content--video;
    }
    &--text {
      display: block;
      font-family: $defaultFont;
      white-space: pre-line;
    }
    &--text-wrap {
      width: 100%;
    }
  }
}
</style>
