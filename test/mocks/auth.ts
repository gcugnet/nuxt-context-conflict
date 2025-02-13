import { registerEndpoint } from '@nuxt/test-utils/runtime'

export default defineNuxtPlugin(async (nuxtApp) => {
	let role = ''

	switch (process.env.PROFILE) {
		case 'admin': role = 'admin'
			break
		case 'user': role = 'user'
			break
		default: role = 'admin'
	}

	registerEndpoint('/auth', () => (
		{
			id: 1,
            email: 'test@test.org',
			role: role,
		}
	))

	const { data: user } = await useFetch('/auth')

	nuxtApp.provide('userAuth', user.value)
})
