export default [
  {
    name: 'nuxt-child',
    render (h) {
      return h('div', [this.$slots.default])
    }
  },
  {
    name: 'nuxt-link',
    props: ['to'],
    render (h) {
      return h('a', [this.$slots.default])
    }
  },
  {
    name: 'client-only',
    render (h) {
      return h('div', [this.$slots.default])
    }
  },
  {
    name: 'no-ssr',
    render (h) {
      return h('div', [this.$slots.default])
    }
  },
  {
    name: 'youtube',
    render (h) {
      return h('div', [this.$slots.default])
    }
  },
  {
    name: 'i18n',
    props: ['path', 'tag', 'for'],
    render (h) {
      return h(this.props.tag, [this.$slots.default])
    }
  }
]
