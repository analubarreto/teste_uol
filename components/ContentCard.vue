<template>
  <main class="content-card">
    <img class="content-card__image" src="https://picsum.photos/300/100" alt="">
    <section class="content-card__info">
      <p class="content-card__info--title">{{ content.title.length > 30 ? `${content.title.slice(0, 30) }...` : content.title }}</p>
      <div class="content-card__info--dates">
        <p>{{ content.created_at }}</p>
        <p>{{ content.updated_at }}</p>
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
  }
}
</script>

<style scoped lang="scss">
.content-card {
  position: relative;
  &__image {
    border-radius: 1rem;
  }
  &__info {
    margin-top: -1rem;
    background-color: white;
    border-radius: 1rem;
    padding: 1rem;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    z-index: 2;
    width: 17.5rem;
    margin-right: auto;
    margin-left: auto;
  }
}
</style>
