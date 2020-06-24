import { shallowMount } from '@vue/test-utils'

import Homepage from '..'

describe('Page: Homepage', () => {
  const factory = (opts = {}) => shallowMount(Homepage, {
    ...opts
  })

  it('matches snapshot', () => {
    const wrapper = factory()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
