<template>
  <main>
    <!-- Video -->
    <iframe v-if="isVideoFile" data-test="video" class="video" src="https://www.youtube.com/embed/YBMq5c2ssY0/">
    </iframe>
    <!-- Image -->
    <el-image
      v-if="!isVideoFile && !isDocumentFile"
      id="image"
      class="image"
      :src="pageImage"
      :alt="content.title"
      fit="fill"
    ></el-image>
    <!-- Link -->
    <p v-if="isLinkFile" id="link">Link para arquivo:
      <a
        class="link"
        href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm"
        target="_blank"
      >Lei da LGPD</a>
    </p>
    <!-- Document -->
    <iframe
      v-if="isDocumentFile"
      id="document"
      src="https://docs.google.com/presentation/d/e/2PACX-1vS7Aa591Nt-v8cnxAf8yTda0XdR2RgM-LZ7koWGVInK1hVNRQx4m2dMNg5eTvn6FVsPgHG4XyWZ0TNr/embed?start=false&loop=false&delayms=3000"
      class="document" frameborder="0" width="960" height="569" allowfullscreen="true"
      mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    <!-- Text -->
    <div v-if="isTextFile" id="text" class="text">
      <p class="content-page__content--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis aliquam. Elementum pulvinar etiam
        non quam. Vitae sapien pellentesque habitant morbi tristique senectus et. Hac habitasse platea dictumst quisque.
        Quam viverra orci sagittis eu volutpat odio. Eu feugiat pretium nibh ipsum consequat nisl vel.

        Neque volutpat ac tincidunt vitae. Cras fermentum odio eu feugiat pretium nibh ipsum consequat. Placerat vestibulum
        lectus mauris ultrices eros. Eu volutpat odio facilisis mauris sit amet massa vitae tortor. Elit at imperdiet dui
        accumsan sit amet nulla facilisi morbi. Enim nec dui nunc mattis enim ut tellus. Nec ullamcorper sit amet risus
        nullam eget felis eget nunc. Ultrices neque ornare aenean euismod elementum nisi. Elementum curabitur vitae nunc
        sed. Non enim praesent elementum facilisis leo vel. Aenean et tortor at risus viverra adipiscing at in tellus.
      </p>
    </div>
  </main>
</template>

<script>
export default {
  name: 'SingleContent',
  props: {
    content: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  computed: {
    pageImage() {
      return this.content.type === 'image' ? 'https://picsum.photos/1024/1024' : 'https://picsum.photos/1024/342'
    },
    isVideoFile() {
      return this.content.type === 'video'
    },
    isLinkFile() {
      return this.content.type === 'link'
    },
    isDocumentFile() {
      return this.content.type === 'document'
    },
    isTextFile() {
      return this.content.type === 'text'
    },
  }
}
</script>

<style scoped lang="scss">
.image {
  border-radius: 1rem;
}
.link {
  &:link,
  &:visited,
  &:hover,
  &:active {
    text-decoration: none;
    color: $purple;
  }
}
.video {
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
.document {
  @extend .video;
}
.text {
  display: block;
  font-family: $defaultFont;
  white-space: pre-line;
}
</style>
