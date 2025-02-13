export default defineNuxtPlugin((nuxtApp) => {
  const user = {
    id: 1,
    email: 'test@test.org',
    role: 'admin',
  };

  nuxtApp.provide('userAuth', user);
});
