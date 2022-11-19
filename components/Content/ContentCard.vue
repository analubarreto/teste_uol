<template>
  <NuxtLink class="card-wrap" :to="`/contents/${content.id}`">
    <main class="content-card">
      <div class="content-card__image-overlay">
        <p>Play</p>
        <i class="fa-solid fa-play"></i>
      </div>
      <img class="content-card__image" src="https://picsum.photos/300/100" alt="" />
      <section class="content-card__info">
        <p class="content-card__info--title">{{ cardTitle }}</p>
        <div class="content-card__info--dates">
          <p>{{ createdAt }}</p>
          <p>{{ updatedAt }}</p>
        </div>
        <div class="content-card__info--extra">
          <p
            :class="content.type === 'document' ? 'content-type-true' : ''">Doc</p>
          <p
            :class="content.type === 'image' ? 'content-type-true' : ''">Imagem</p>
          <p
            :class="content.type === 'video' ? 'content-type-true' : ''">Vídeo</p>
          <p
            :class="content.type === 'link' ? 'content-type-true' : ''">Link</p>
        </div>
      </section>
    </main>
  </NuxtLink>
</template>

<script>
export default {
  name: 'ContentCard',
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
  computed: {
    cardTitle() {
      return this.content.title.length >= 25 ? `${this.content.title.slice(0, 25)}...` : this.content.title
    },
    createdAt() {
      return this.formatDate(this.content.created_at);
    },
    updatedAt() {
      return this.formatDate(this.content.updated_at);
    }
  },
  methods: {
    formatDate(date) {
      const createDate = new Date(date);
      return `${createDate.getDate()}/${createDate.getMonth()}/${createDate.getFullYear()}`
    }
  }
}
</script>

<style scoped lang="scss">
.content-type-true {
  color: rgb(121, 215, 33);
}
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
