<template>
  <el-page-header @back="goBack">
  </el-page-header>
</template>

<script>
export default {
  props: {
    headerText: {
      type: String,
      default: '',
     }
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  }
</script>
