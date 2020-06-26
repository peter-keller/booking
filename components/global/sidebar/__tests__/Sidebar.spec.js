import { shallowMount } from '@vue/test-utils'

import Sidebar from '..'

describe('Component: Sidebar', () => {
  const defaultOpts = {
    propsData: {
      name: 'navigation'
    }
  }

  const factory = (opts = {}) => shallowMount(Sidebar, {
    ...defaultOpts,
    ...opts
  })

  it('matches snapshot', () => {
    const wrapper = factory()

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('matches snapshot when open', () => {
    const wrapper = factory({
      name: 'navigation',
      isOpen: true
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('matches snapshot with slots passed in', () => {
    const wrapper = factory({
      slots: {
        default: '<div>Test slot</div>'
      },
      propsData: {
        name: 'navigation',
        isOpen: true
      }
    })

    expect(wrapper.html()).toMatchSnapshot()
  })

  it('$emits close event when close button is clicked', () => {
    const wrapper = factory({
      slots: {
        default: '<div>Test slot</div>'
      },
      propsData: {
        name: 'navigation',
        isOpen: true
      }
    })

    wrapper.find('icon-stub').vm.$emit('click')

    expect(wrapper.emitted('close')).toBeTruthy()
  })
})
