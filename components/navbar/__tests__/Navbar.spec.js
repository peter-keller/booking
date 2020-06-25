import { shallowMount } from '@vue/test-utils'

import Navbar from '..'

describe('Component: Navbar', () => {
  const factory = (opts = {}) => shallowMount(Navbar, {
    ...opts
  })

  it('matches snapshot', () => {
    const wrapper = factory()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
