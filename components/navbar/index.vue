<template>
  <div class="navbar">
    <div class="navbar__inner">
      <div class="navbar__top">
        <nuxt-link to="/">
          <Icon name="Logo" />
        </nuxt-link>
        <div class="navbar__user">
          <UserGreeting />
        </div>
      </div>
      <div class="navbar__search">
        <input type="text" :placeholder="$t('HOMEPAGE_SEARCH_PLACEHOLDER')">
      </div>
      <nuxt-link to="/">
        <img class="navbar__img" src="../../assets/images/azam.jpg">
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Icon from '~/components/global/icons'
import UserGreeting from '~/components/user-greeting'

export default {
  name: 'Navbar',

  components: {
    Icon,
    UserGreeting
  }
}
</script>

<style lang="scss" scoped>
  $mobile-height: 108px;

  .navbar {
    border-bottom: 1px solid $color-gray-2;
    height: $mobile-height;

    @include tablet {
      height: $space-140;
    }

    &__top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      @include tablet {
        width: unset;
      }
    }

    &__user {
      @include tablet {
        display: none;
      }
    }

    &__inner {
      display: flex;
      flex-wrap: wrap;
      height: 100%;
      margin: $space-060;

      @include tablet {
        justify-content: space-between;
        align-items: center;
        margin: auto $space-130;
      }
    }

    &__img {
      display: none;
      width: $space-110;
      height: $space-110;
      border-radius: 100%;

      @include tablet {
        display: block;
      }
    }

    &__search {
      width: 100%;

      @include tablet {
        width: 33%;
      }

      input {
        width: 100%;
        border: none;
        background-color: $color-gray-1;
        height: $space-100;
        padding: $space-050;

        ::placeholder {
          color: $color-gray-3;
        }
      }
    }
  }
</style>
