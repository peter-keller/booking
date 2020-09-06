<template>
  <nuxt-link :to="link">
    <div class="card">
      <img :src="image">
      <div class="card__content">
        <h3>{{ name }}</h3>
        <div class="card__rating">
          <Icon class="card__content--icon" name="Star" />
          <Rating :rating="rating" />
        </div>
        <div class="card__break" />
        <p class="card__distance">
          {{ $t('CARD_DISTANCE', { number: distance }) }}
        </p>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import Icon from '~/components/global/icons'
import Rating from '~/components/rating'

export default {
  components: {
    Icon,
    Rating
  },

  props: {
    image: {
      type: String,
      required: true
    },

    link: {
      type: String,
      required: true
    },

    rating: {
      type: Number,
      required: true
    },

    name: {
      type: String,
      required: true
    },

    distance: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
    color: black;
  }

  .card {
    text-decoration: none;
    margin-bottom: $space-080;

    img {
      width: 100%;
      border-radius: 8px;
    }

    &__content {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      margin: $space-030 0;

      @include tablet {
        flex-direction: row;
      }

      &--icon {
        margin: 0 $space-020;
      }
    }

    &__break {
      @include tablet {
        flex-basis: 100%;
        height: 0;
      }
    }

    &__rating {
      display: flex;
    }

    &__distance {
      @include font($font-030);
      line-height: 12px;
    }
  }
</style>
