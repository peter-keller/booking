<template>
  <div class="sidebar">
    <div
      v-if="isOpen"
      class="sidebar__backdrop"
      @click="closeSidebarPanel"
    />
    <transition
      enter-active-class="sidebar--enter-active"
      leave-active-class="sidebar--leave-active"
      enter-class="sidebar--enter"
      leave-to-class="sidebar--leave-to"
    >
      <div v-if="isOpen" class="sidebar__panel">
        <div class="sidebar__close">
          <Icon name="close" :clickable="true" @click="closeSidebarPanel" />
        </div>
        <slot />
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '~/components/global/icons'

export default {
  name: 'Sidebar',

  components: {
    Icon
  },

  props: {
    name: {
      type: String,
      required: true
    },

    isOpen: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    closeSidebarPanel (e) {
      this.$emit('close', e)
    }
  }
}
</script>

<style lang="scss" scoped>

.sidebar {
  &--enter-active,
  &--leave-active {
    transition: transform 0.2s ease;
  }

  &--enter,
  &--leave-to {
    transform: translateX(100%);
    transition: all 150ms ease-in 0s;
  }

  &__backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    cursor: pointer;
  }

  &__panel {
    overflow-y: auto;
    background-color: $color-white;
    position: fixed;
    right: 0;
    top: 0;
    height: 100vh;
    z-index: 999;
    padding: 20px 20px 2rem 20px;
    width: 300px;
  }

  &__close {
    height: 3rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
}

</style>
