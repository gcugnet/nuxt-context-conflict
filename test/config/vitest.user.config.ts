import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		include: ['./test/*.user.test.{ts,js}'],
		setupFiles: ['test/setup.ts', 'test/role-user.ts'],
		environmentOptions: {
			nuxt: {
				overrides: {
					plugins: ['~/test/mocks/auth.ts'],
				},
			},
		},
	},
})
