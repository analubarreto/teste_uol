<template>
  <div class="page">
    <PageHeader :header-text="routeName" />
    <div>

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
.page {
  @include page-style;
}
</style>
