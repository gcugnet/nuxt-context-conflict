import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  {
    extends: './test/config/vitest.admin.config.ts',
    test: {
      name: 'admin',
    },
  },
  {
    extends: './test/config/vitest.user.config.ts',
    test: {
      name: 'user',
    },
  },
]);
