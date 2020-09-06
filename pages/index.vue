<template>
  <div class="container">
    <CardGroup :cards="cards" :columns="3">
      <template v-slot:default="{ card }">
        <Card v-if="card" v-bind="card" />
      </template>
    </CardGroup>
  </div>
</template>

<script>
import Card from '~/components/card'
import CardGroup from '~/components/card-group'

export default {
  components: {
    Card,
    CardGroup
  },

  data () {
    return {
      cards: [1, 2, 3, 4]
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 24px;
}
</style>
