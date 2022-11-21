<template>
  <div class="page-wrapper">
    <div class="page">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
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
