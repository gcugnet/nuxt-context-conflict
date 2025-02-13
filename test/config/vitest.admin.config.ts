import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
	test: {
		environment: 'nuxt',
		include: ['./test/*.admin.test.{ts,js}'],
		setupFiles: ['test/setup.ts', 'test/role-admin.ts'],
		environmentOptions: {
			nuxt: {
				overrides: {
					plugins: ['~/test/mocks/auth.ts'],
				},
			},
		},
	},
})
