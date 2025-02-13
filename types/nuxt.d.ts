import { NuxtApp } from '#app'

declare module '#app' {
  interface NuxtApp {
    $userAuth: { id: number; email: string; role: string }
  }
}
