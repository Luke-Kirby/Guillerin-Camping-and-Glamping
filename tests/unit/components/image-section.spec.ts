import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'

import CompImageSection from '@/components/non-contextual/image-section/ImageSection.vue'

describe('CompImageSection.vue', () => {
    it('renders props title and subtitle when passed as string', () => {
        const props = {
            title: 'Title',
            subTitle: 'Sub Title'
        }
        const wrapper = shallowMount(CompImageSection, {
            props
        })
        expect(wrapper.text()).to.include('Title')
        expect(wrapper.text()).to.include('Sub Title')
    })

    it('renders props title and subtitle when passed as functions', () => {
        const props = {
            title: () => 'Title',
            subTitle: () => 'Sub Title'
        }
        const wrapper = shallowMount(CompImageSection, {
            props
        })
        expect(wrapper.text()).to.include('Title')
        expect(wrapper.text()).to.include('Sub Title')
    })

    it('renders appropriate classes when is full page', () => {
        const props = {
            title: () => 'Title',
            subTitle: () => 'Sub Title',
            isFullPage: true
        }
        const wrapper = shallowMount(CompImageSection, {
            props
        })

        expect(wrapper.find('.site-hero-full-page').exists()).to.eq(true)
    })

    it('renders appropriate classes when is not full page', () => {
        const props = {
            title: 'Title',
            subTitle: 'Sub Title',
            isFullPage: false
        }
        const wrapper = shallowMount(CompImageSection, {
            props
        })

        expect(wrapper.find('.site-hero-section').exists()).to.eq(true)
    })

    it('renders button and click functionality works', async () => {
        let testEmittedFunction = false
        let testCalledFunction = false

        const props = {
            title: 'Title',
            subTitle: 'Sub Title',
            isFullPage: false,
            action: {
                label: 'push me',
                press: () => testCalledFunction = true
            }
        }

        const wrapper = shallowMount(CompImageSection, {
            props,
            emits: {
                buttonClicked: () => testEmittedFunction = true
            }
        })

        await wrapper.find('button').trigger('click')

        expect(wrapper.find('button').text()).to.contain('push me')
        expect(testEmittedFunction).to.eq(true)
        expect(testCalledFunction).to.eq(true)
    })
})
