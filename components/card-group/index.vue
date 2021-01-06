<template>
  <!-- TODO: Get loading animation -->
  <!-- <LoadingIndicator v-if="isLoading" /> -->
  <ul>
    <!-- <li v-if="!hasCards" class="card-grid-empty">
      <slot name="empty" />
    </li> -->
    <li v-for="card in cards" :key="card.id" :class="columnClass">
      <slot :card="card" />
    </li>
  </ul>
</template>

<script>
import isEmptyArray from '~/helpers/is-empty-array'
import { COLUMN_CLASSES } from '~/constants/ui'

export default {
  name: 'CardGroup',

  props: {
    cards: {
      type: Array,
      required: true
    },

    isLoading: {
      type: Boolean,
      default: false
    },

    columns: {
      type: Number,
      default: COLUMN_CLASSES.fluid
    }
  },

  computed: {
    columnClass () {
      return COLUMN_CLASSES[this.columns]
    },

    hasCards () {
      return isEmptyArray(this.cards)
    }
  }
}
</script>

<style lang="scss" scoped>
  $base-gutter: 2em;
  $columns: (
    half: 50%,
    third: 33.3%,
    fourth: 25%,
    fifth: 20%
  );

  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    margin-left: -($base-gutter/2);
    margin-right: -($base-gutter/2);

    > * {
      box-sizing: border-box;
      padding-left: $base-gutter/2;
      padding-right: $base-gutter/2;
    }
  }

  img {
    width: 100%;
  }

  .fluid {
    flex: 1;
  }

  .card-grid-empty {
    flex: 1;
    padding: $base-gutter;
  }

  // Render all column widths (mobile first design)
  @each $class, $width in $columns {
    .#{$class} {
      width: $width;

      @include mobile {
        width: 100%;
      }
    }
  }
</style>
