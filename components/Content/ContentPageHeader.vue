<template>
  <header id="header" class="content-page__header">
    <h2>{{ content.title }}</h2>
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
        <el-button id="download-button" icon="el-icon-download" :disabled="downloadButtonDisabled" type="primary" @click="successDownload">
          Download</el-button>
        <el-button id="embed-button" type="primary" icon="el-icon-link" :disabled="embedButtonDisabled" @click="successCopy">Embed
        </el-button>
      </el-col>
    </el-row>
    <el-divider></el-divider>
  </header>
</template>

<script>
import formatDate from '~/helpers/date-helpers/formatDate.js';
export default {
  name: 'PageHeader',
  props: {
    content: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    embedButtonDisabled() {
      return !this.content.embeddable
    },
    downloadButtonDisabled() {
      return !this.content.allow_download
    },
    createdAt() {
      return formatDate(this.content.created_at);
    },
    updatedAt() {
      return formatDate(this.content.updated_at);
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
