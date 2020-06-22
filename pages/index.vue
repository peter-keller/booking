<template>
  <div class="container">
    <MdButton class="md-primary">
      {{ $t('EXAMPLE') }}
    </MdButton>
    <p>hello</p>
  </div>
</template>

<script>

export default {}
</script>

<style lang="scss">
.container {
  p {
    @include font($font-120)
  }
}
</style>
