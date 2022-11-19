<template>
  <el-page-header :content="headerText" @back="goBack">
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
