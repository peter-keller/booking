<template>
  <div
    :class="[
      'iconWrapper',
      sizeClass
    ]"
    @click="handleClick"
    v-html="svg"
  />
</template>

<script>
import icons from './icons'
import IconSize from './size'

export default {
  name: 'Icon',

  props: {
    /**
    * The name of the icon to display.
    */
    name: {
      type: String,
      required: true
    },

    /**
     * Sets the size of the Icon
     */
    size: {
      type: String,
      default: 'medium'
    },

    /**
    * Inverts the colour of the svg
    */
    invert: {
      type: Boolean,
      default: false
    },

    /**
    * Applies a stoke colour to the svg
    */
    stroke: {
      type: String,
      default: ''
    },

    /**
     * Is the icon clickable
     */
    clickable: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    svg () {
      let svg = icons[this.name]
      if (!svg) return ''

      if (this.stroke) {
        svg = svg.replace(/stroke="[^\s]*"/g, `stroke="${this.stroke}"`)
      }

      return svg
    },

    sizeClass () {
      switch (this.size) {
        case IconSize.Small: {
          return 'iconWrapper--small'
        }
        case IconSize.XSmall: {
          return 'iconWrapper--xsmall'
        }
        case IconSize.XXSmall: {
          return 'iconWrapper--xxsmall'
        }
        case IconSize.XXLarge: {
          return 'iconWrapper--xxlarge'
        }
        case IconSize.XLarge: {
          return 'iconWrapper--xlarge'
        }
        case IconSize.Large: {
          return 'iconWrapper--large'
        }
        case IconSize.Medium:
        default: {
          return 'iconWrapper--medium'
        }
      }
    }
  },

  methods: {
    handleClick (e) {
      if (!this.clickable) return

      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>

  .iconWrapper {
    display: flex;
    align-items: center;

    &--invert {
      filter: invert(1);
    }

    &--xxsmall {
      width: $space-030;
      height: $space-030;
    }

    &--xsmall {
      width: $space-040;
      height: $space-040;
    }

    &--small {
      width: $space-050;
      height: $space-050;
    }

    &--medium {
      width: $space-060;
      height: $space-060;
    }

    &--large {
      width: $space-070;
      height: $space-070;
    }

    &--xlarge {
      width: $space-080;
      height: $space-080;
    }

    &--xxlarge {
      width: $space-090;
      height: $space-090;
    }

    svg {
      width: 100%;
      height: 100%;
    }
  }

</style>
