import { shallowMount } from '@vue/test-utils'

import UserGreeting from '..'

describe('Component: UserGreeting', () => {
  const factory = (opts = {}) => shallowMount(UserGreeting, {
    ...opts
  })

  it('matches snapshot', () => {
    const wrapper = factory()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('calls "OpenSidebar" when Icon clicked', () => {
    const wrapper = factory()

    wrapper.find('icon-stub').vm.$emit('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })
})
