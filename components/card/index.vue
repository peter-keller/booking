<template>
  <nuxt-link :to="link">
    <div class="card">
      <img :src="image">
      <div>
        <div class="card__content">
          <h3>{{ name }}</h3>
          <Icon class="card__content--icon" name="Star" />
          <Rating :rating="rating" />
        </div>
        <p class="card__distance">{{ $t('CARD_DISTANCE', { number: distance }) }}</p>
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
      default: 'https://www.dailydot.com/wp-content/uploads/2018/07/sasha-grey.jpg'
    },

    link: {
      type: String,
      default: ''
    },

    rating: {
      type: Number,
      required: true,
      default: 0
    },

    name: {
      type: String,
      required: true,
      default: 'Amanda'
    },

    distance: {
      type: Number,
      required: true,
      default: 0.5
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
    font-family: int;

    img {
      width: 100%;
      border-radius: 8px;
    }

    &__content {
      display: flex;
      align-items: center;
      margin: $space-030 0;

      &--icon {
        margin: 0 $space-020;
      }

      h3 {

      }
    }

    &__distance {
      @include font($font-030);
      line-height: 12px;
    }
  }

  // .perks-card {
  //   text-align: center;
  //   margin-bottom: 3rem;
  //   cursor: pointer;

  //   &.background-image {
  //     display: flex;
  //     position: relative;
  //     justify-content: center;
  //     min-height: 30em;
  //     background-position: center center;
  //     background-size: cover;
  //     color: white;
  //     border-radius: 2px;

  //     &:after {
  //       position: absolute;
  //       background-color: black;
  //       border-radius: 2px;
  //       content: "";
  //       top: 0;
  //       left: 0;
  //       width: 100%;
  //       height: 100%;
  //       opacity: .5;
  //     }

  //     .content {
  //       align-self: flex-end;
  //       align-items: center;
  //       margin-bottom: 3em;
  //       padding: 0 1em;
  //       z-index: 100;

  //       * {
  //         color: white;
  //       }

  //       h4 {
  //         // @include font('050');
  //         color: $color-white;
  //         margin: .6em 0;
  //       }
  //     }
  //   }
  // }
</style>
