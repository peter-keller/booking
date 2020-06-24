import { shallowMount } from '@vue/test-utils'

import IconSize from '../size'
import Icon from '..'

describe('Elements: Icon', () => {
  const defaultOpts = {
    propsData: {
      name: 'Hello'
    }
  }

  const factory = (opts = {}) => shallowMount(Icon, {
    ...defaultOpts,
    ...opts
  })

  describe('snapshots', () => {
    it('matches default snapshot', () => {
      const wrapper = factory()

      expect(wrapper.html()).toMatchSnapshot()
    })

    Object.values(IconSize).forEach(size => {
      it(`matches snapshot when size === ${size}`, () => {
        const wrapper = factory({ propsData: { ...defaultOpts.propsData, size } })

        expect(wrapper.html()).toMatchSnapshot()
      })
    })
  })

  it('$emits click on click if it is clickable', () => {
    const wrapper = factory({
      propsData: { ...defaultOpts.propsData, clickable: true }
    })

    wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeTruthy()
  })

  it('does not $emits click on click if it is not clickable', () => {
    const wrapper = factory({
      propsData: {
        name: 'Hello',
        clickable: false
      }
    })

    wrapper.trigger('click')

    expect(wrapper.emitted('click')).toBeFalsy()
  })

  describe('#Svg', () => {
    it('returns empty string when no icons match', () => {
      const wrapper = factory({
        propsData: {
          name: 'asasd'
        }
      })

      expect(wrapper.vm.svg).toBe('')
    })
  })
})
