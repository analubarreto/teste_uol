<template>
  <main class="content-page">
    <header class="content-page__header">
      <h2>{{ getContent.title }}</h2>
      <el-row :gutter="20">
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-row :gutter="20">
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <p>Conteúdo criado em: {{ createdAt }}</p>
            </el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
              <p>Última atualização: {{ updatedAt }}</p>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-button type="primary" icon="el-icon-download" :disabled="downloadButtonDisabled">Download</el-button>
          <el-button type="primary" icon="el-icon-link" :disabled="embedButtonDisabled">Embed</el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </header>
    <section class="content-page__content">
    <el-image
      class="content-page__content--image"
      :src="pageImage"
      :alt="getContent.title"
      fit="fill"></el-image>
    </section>
  </main>
</template>

<script>
import contentsQuery from '~/apollo/queries/content/content.gql';
import formatDate from '~/helpers/date-helpers/formatDate.js';
import Icon from '~/components/Content/TooltipIcon.vue';

export default {
  Name: 'SingleContentPage',
  comments: {
    Icon
  },
  apollo: {
    getContent: {
      prefetch: true,
      query: contentsQuery,
      variables() {
        return { id: this.$route.params.id }
      }
    }
  },
  computed: {
    createdAt() {
      return formatDate(this.getContent.created_at);
    },
    updatedAt() {
      return formatDate(this.getContent.updated_at);
    },
    pageImage() {
      return this.getContent.type === 'image' ? 'https://picsum.photos/1024/1024' : 'https://picsum.photos/1024/342'
    },
    downloadButtonDisabled() {
      return this.getContent.allow_download
    },
    embedButtonDisabled() {
      return this.getContent.embeddable
    },
  }
}
</script>

<style scoped lang="scss">
.content-page {
  &__content {
    margin-right: auto;
    margin-left: auto;
    width: 75%;
    &--image {
      border-radius: 2rem;
    }
  }
}
</style>
