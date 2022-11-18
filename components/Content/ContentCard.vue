<template>
  <main class="content-card">
    <div></div>
    <img class="content-card__image" src="https://picsum.photos/300/100" alt="" />
    <section class="content-card__info">
      <p class="content-card__info--title">{{ cardTitle }}</p>
      <div class="content-card__info--dates">
        <p>{{ createdAt }}</p>
        <p>{{ updatedAt }}</p>
      </div>
    </section>
  </main>
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
.content-card {
  width: 18.75rem;
  position: relative;
  &__image {
    border-radius: 1rem;
  }
  &__info {
    margin-top: -1rem;
    background-color: rgb(220, 131, 255);
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    z-index: 2;
    width: 17.5rem;
    margin-right: auto;
    margin-left: auto;
    &--title {
      font-weight: 600;
      color: rgb(255, 255, 255);
    }
    &--dates {
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
    }
  }
}
</style>
