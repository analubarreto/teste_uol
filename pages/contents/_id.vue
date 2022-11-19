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
        <el-col v-if="!isLinkFile" :xs="24" :sm="12" :md="12" :lg="12" :xl="12">
          <el-button type="primary" icon="el-icon-download" :disabled="downloadButtonDisabled">Download</el-button>
          <el-button type="primary" icon="el-icon-link" :disabled="embedButtonDisabled">Embed</el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </header>
    <section class="content-page__content">
      <iframe v-if="isVideoFile" class="content-page__content--video" src="https://www.youtube.com/embed/YBMq5c2ssY0/">
      </iframe>
      <el-image
        v-else
        class="content-page__content--image"
        :src="pageImage"
        :alt="getContent.title"
        fit="fill"></el-image>
      <div>
        <p v-if="isLinkFile">Link para arquivo:
          <a class="content-page__content--link" href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank">Lei da LGPD</a>
        </p>
      </div>
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
    isVideoFile() {
      return this.getContent.type === 'video'
    },
    isLinkFile() {
      return this.getContent.type === 'link'
    },
    isDocumentFile() {
      return this.getContent.type === 'document'
    },
    isTextFile() {
      return this.getContent.type === 'text'
    },
  }
}
</script>

<style scoped lang="scss">
.content-page {
  position: relative;
  &__content {
    margin-right: auto;
    margin-left: auto;
    width: 100%;
    @include xl {
      width: 75%;
    }
    @include lg {
      width: 75%;
    }
    &--video {
      border-radius: 1rem;
      width: 100%;
      height: 25vh;
      @include xl {
        width: 80%;
        height: 75vh;
      }
      @include lg {
        width: 80%;
        height: 75vh;
      }
      @include sm {
        width: 100%;
      }
    }
    &--image {
      border-radius: 1rem;
    }
    &--link {
      &:link, &:visited, &:hover, &:active {
        text-decoration: none;
        color: $purple;
      }
    }
  }
}
</style>
