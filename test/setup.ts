import { vi } from 'vitest'
vi.mock('~/plugins/userAuth.ts', () => ({
	default: {},
}))
