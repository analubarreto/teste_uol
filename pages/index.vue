<template>
  <main class="page">
    <el-row :gutter="10">
      <el-col :span="24">
        <h1 class="page__title">Bem Vindo</h1>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="9" :xl="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="8" :lg="9" :xl="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="4" :lg="3" :xl="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style scoped lang="scss">
.page {
  @include page-style;
  &__title {
    @include title;
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
