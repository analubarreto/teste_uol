<template>
  <main class="loading">
    <p class="loading__text">Loading</p>
    <i class="el-icon-loading loading__icon"></i>
  </main>
</template>

<script>
export default {
  name: 'LoadingComponent'
}
</script>

<style scoped lang="scss">
.loading {
  background-color: rgba(36, 36, 36, 0.424);
  color: #FFF;
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__text {
    font-size: 2rem;
  }
  &__icon {
    font-size: 2rem;
  }
}
</style>
