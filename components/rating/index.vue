<template>
  <div class="rating">
    <span class="rating__number">4.9</span>
    <span>- Excellent Service</span>
  </div>
</template>

<script>
export default {
  name: 'Rating',

  props: {
    rating: {
      type: Number,
      required: true
    }
  },

  computed: {
    ehh () {
      return ''
    }
  }
}
</script>

<style lang="scss" scoped>
.rating {
  color: $color-purple;

  &__number {
    @include font($font-060, 500)
  }
}
</style>
