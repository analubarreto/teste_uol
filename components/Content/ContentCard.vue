<template>
  <NuxtLink class="card-wrap" :to="`/contents/${content.id}`">
    <main class="content-card">
      <div class="content-card__image-overlay">
        <i v-if="content.type === 'video'" class="el-icon-video-play content-card__image-overlay--icon"></i>
      </div>
      <img class="content-card__image" src="https://picsum.photos/300/100" alt="" />
      <section class="content-card__info">
        <p class="content-card__info--title">{{ cardTitle }}</p>
        <div class="content-card__info--dates">
          <p>{{ createdAt }}</p>
          <p>{{ updatedAt }}</p>
        </div>
        <div class="content-card__info--extra">
          <CardIcon
            v-for="icon in footerIcons"
            :key="icon.id"
            :tooltip-content="icon.tooltipContent"
            :content-type="icon.contentType"
            :icon="icon.icon"
            :content="content"
          />
        </div>
      </section>
    </main>
  </NuxtLink>
</template>

<script>
import CardIcon from '~/components/Content/TooltipIcon.vue';
import formatDate from '~/helpers/date-helpers/formatDate.js';

export default {
  name: 'ContentCard',
  components: {
    CardIcon
  },
  props: {
    content: {
      type: Object,
      default: () => {
        return {
          content: {}
        }
      }
    }
  },
  data() {
    return {
      footerIcons: [
        {
          id: 1,
          tooltipContent: 'Documento',
          contentType: 'document',
          icon: 'el-icon-document'
        },
        {
          id: 2,
          tooltipContent: 'Imagem',
          contentType: 'image',
          icon: 'el-icon-picture-outline'
        },
        {
          id: 3,
          tooltipContent: 'Vídeo',
          contentType: 'video',
          icon: 'el-icon-video-camera-solid'
        },
        {
          id: 4,
          tooltipContent: 'Link',
          contentType: 'link',
          icon: 'el-icon-link'
        },
        {
          id: 5,
          tooltipContent: 'Texto',
          contentType: 'text',
          icon: 'el-icon-reading'
        },
      ]
    }
  },
  computed: {
    cardTitle() {
      return this.content.title && this.content.title.length >= 25 ? `${this.content.title.slice(0, 25)}...` : this.content.title
    },
    createdAt() {
      return formatDate(this.content.created_at);
    },
    updatedAt() {
      return formatDate(this.content.updated_at);
    }
  },
}
</script>

<style scoped lang="scss">
.card-wrap {
  text-decoration: none;
  &:link, &:active, &:visited, &:hover {
    color: #2d2d2d;
  }
}
.content-card {
  width: 18.75rem;
  position: relative;
  &__image {
    border-radius: 1rem;
    box-shadow: $default-shadow;
  }
  &__image-overlay {
    border-radius: 1rem;
    background-color: rgba(161, 67, 255, 0.639);
    position: absolute;
    width: 100%;
    height: 6.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
    &--icon {
      font-size: 2rem;
    }
  }
  &__info {
    position: relative;
    margin-top: -1.5rem;
    background-color: #FFFFFF;
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    width: 17.5rem;
    margin-right: auto;
    margin-left: auto;
    box-shadow: $default-shadow;
    &--extra {
      display: flex;
      justify-content: space-between;
      font-size: .675rem;
    }
    &--title {
      font-weight: 600;
      color: #2d2d2d;
    }
    &--dates {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  }
}
</style>
