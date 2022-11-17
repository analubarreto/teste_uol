<template>
  <p>{{ slug }}</p>
</template>

<script>
export default {
  Name: 'Single content page',
  asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  }
}
</script>
