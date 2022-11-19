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
          <el-button icon="el-icon-download" :disabled="downloadButtonDisabled" type="primary" @click="successDownload">Download</el-button>
          <el-button type="primary" icon="el-icon-link" :disabled="embedButtonDisabled" @click="successCopy">Embed</el-button>
        </el-col>
      </el-row>
      <el-divider></el-divider>
    </header>
    <section class="content-page__content">
      <!-- Video -->
      <iframe v-if="isVideoFile" class="content-page__content--video" src="https://www.youtube.com/embed/YBMq5c2ssY0/">
      </iframe>
      <!-- Image -->
      <el-image
        v-if="!isVideoFile && !isDocumentFile"
        class="content-page__content--image"
        :src="pageImage"
        :alt="getContent.title"
        fit="fill"></el-image>
      <!-- Link -->
      <p v-if="isLinkFile">Link para arquivo:
        <a class="content-page__content--link" href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank">Lei da LGPD</a>
      </p>
      <!-- Document -->
      <iframe
        v-if="isDocumentFile"
        src="https://docs.google.com/presentation/d/e/2PACX-1vS7Aa591Nt-v8cnxAf8yTda0XdR2RgM-LZ7koWGVInK1hVNRQx4m2dMNg5eTvn6FVsPgHG4XyWZ0TNr/embed?start=false&loop=false&delayms=3000"
        class="content-page__content--document"
        frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true"
        webkitallowfullscreen="true"></iframe>
      <!-- Text -->
      <div v-if="isTextFile">
        <pre class="content-page__content--text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Elementum pulvinar etiam non
            quam. Vitae sapien pellentesque habitant morbi tristique senectus et. Hac habitasse platea dictumst quisque. Quam
            viverra orci sagittis eu volutpat odio. Eu feugiat pretium nibh ipsum consequat nisl vel.

            Neque volutpat ac tincidunt
            vitae. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Placerat vestibulum lectus mauris ultrices eros. Eu
            volutpat odio facilisis mauris sit amet massa vitae tortor. Elit at imperdiet dui accumsan sit amet nulla facilisi
            morbi. Enim nec dui nunc mattis enim ut tellus. Nec ullamcorper sit amet risus nullam eget felis eget nunc. Ultrices
            neque ornare aenean euismod elementum nisi. Elementum curabitur vitae nunc sed. Non enim praesent elementum facilisis
            leo vel. Aenean et tortor at risus viverra adipiscing at in tellus.
        </pre>
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
  data() {
    return {
      getContent: {}
    }
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
  },
  methods: {
    successDownload() {
      this.$message({
        message: 'Download feito com sucesso!',
        type: 'success'
      });
    },
    successCopy() {
      this.$message({
        message: 'Link copiado com sucesso!',
        type: 'success'
      });
    }
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
    &--document {
      @extend .content-page__content--video;
    }
    &--text {
      display: block;
      font-family: $defaultFont;
      width: 90%;
      @include xl {
          width: 75%;
        }

        @include lg {
          width: 75%;
        }
    }
  }
}
</style>
