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
  },

  data () {
    return {
      cards: [
        {
          image: 'https://www.dailydot.com/wp-content/uploads/2018/07/sasha-grey.jpg',
          link: '/',
          name: 'Sasha',
          rating: 5,
          distance: 0.5,
          id: 1
        },
        {
          image: 'https://www.dailydot.com/wp-content/uploads/2018/07/sasha-grey.jpg',
          link: '/',
          name: 'Sasha',
          rating: 5,
          distance: 0.5,
          id: 2
        },
        {
          image: 'https://www.dailydot.com/wp-content/uploads/2018/07/sasha-grey.jpg',
          link: '/',
          name: 'Sasha',
          rating: 5,
          distance: 0.5,
          id: 3
        },
        {
          image: 'https://www.dailydot.com/wp-content/uploads/2018/07/sasha-grey.jpg',
          link: '/',
          name: 'Sasha',
          rating: 5,
          distance: 0.5,
          id: 4
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 24px;
}
</style>
