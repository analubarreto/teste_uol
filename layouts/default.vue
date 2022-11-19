<template>
  <div class="page-wrapper">
    <PageHeader :header-text="routeName" />
    <div class="page">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import PageHeader from '~/components/Layout/PageHeader.vue';

export default {
  name: 'DefaultLayout',
  components: {
    PageHeader
  },
  computed: {
    routeName() {
      return this.$route.name;
    }
  },
}
</script>

<style scoped lang="scss">
.page-wrapper {
  @include page-style;
}
.page {
  padding: 1rem;
}
</style>
