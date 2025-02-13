import { mountSuspended } from '@nuxt/test-utils/runtime'
import { flushPromises } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import App from '~/app.vue'

describe('synthesis page', async () => {
	it('returns a table with values from ', async () => {
		const wrapper = await mountSuspended(App, { route: '/' })

			await flushPromises()

		expect(wrapper.text()).toBe('I am a user.')
	})
})
