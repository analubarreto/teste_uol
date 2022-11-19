<template>
  <el-tooltip effect="dark" :content="tooltipContent" placement="bottom">
    <i :class="`${icon} ${iconStyle}`"></i>
  </el-tooltip>
</template>

<script>
export default {
  name: 'TooltipIcon',
  props: {
    content: {
      type: Array,
      default: () => {
        // eslint-disable-next-line vue/require-valid-default-prop
        return {
          content: []
        }
      },
      required: false
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
  },
  computed: {
    iconStyle() {
      return this.content.type === this.contentType ? 'content-type-true' : 'content-type'
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
