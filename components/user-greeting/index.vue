<template>
  <div class="user-greeting">
    <div class="user-greeting__message">
      <h3>{{ this.$t('HOMEPAGE_WELCOME_MESSAGE') }}</h3>
      <p>Patryk</p>
    </div>
    <Icon name="ArrowDown" :clickable="true" @click="openSidebar" />
  </div>
</template>

<script>
import Icon from '~/components/global/icons'

export default {
  name: 'UserGreeting',

  components: {
    Icon
  },

  methods: {
    openSidebar (event) {
      this.$emit('click', event)
    }
  }
}
</script>

<style lang="scss" scoped>
  .user-greeting {
    display: flex;

    &__message {
      margin-right: $space-030;

      h3 {
        @include font($font-060);

        margin: 0;
        color: $color-purple;
      }

      p {
        @include font($font-080);

        margin: $space-030 0;
      }
    }
  }
</style>
