<template>
  <el-page-header v-if="routeName !== 'index'" id="layout-header" @back="goBack">
  </el-page-header>
</template>

<script>
export default {
  name: 'LayoutHeader',
  props: {
    routeName: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  }
}
</script>
