<template>
  <el-tooltip effect="dark" :content="tooltipContent" placement="bottom">
    <fa :class="content.type === contentType ? 'content-type-true' : 'content-type'" :icon="['fas', icon]" />
  </el-tooltip>
</template>

<script>
export default {
  name: 'CardIcon',
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          content: {}
        }
      }
    },
    tooltipContent: {
      type: String,
      default: () => {
        return ''
      }
    },
    contentType: {
      type: String,
      default: () => {
        return ''
      }
    },
    icon: {
      type: String,
      default: () => {
        return ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content-type {
  font-size: 1rem;
}

.content-type-true {
  @extend .content-type;
  color: rgb(121, 215, 33);
}
</style>
