<template>
  <div class="container">
    <CardGroup :cards="cards" :columns="3">
      <template v-slot:default="{ card }">
        <Card
          v-if="card"
          :image="card.image"
          :link="card.link"
          :name="card.name"
          :rating="card.rating"
          :distance="card.distance"
        />
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
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 24px;
}
</style>
