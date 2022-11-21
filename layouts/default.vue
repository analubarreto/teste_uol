<template>
  <div class="page-wrapper">
    <LayoutHeader :route-name="routeName" />
    <div class="page">
      <Nuxt />
    </div>
  </div>
</template>

<script>
import LayoutHeader from '~/components/Layout/LayoutHeader.vue';

export default {
  name: 'DefaultLayout',
  components: {
    LayoutHeader
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
  padding: 1.5rem;
}
</style>
