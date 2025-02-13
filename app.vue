<script setup lang="ts">

const { $userAuth } = useNuxtApp()

</script>

<template>
  <div v-if="$userAuth.role === 'admin'">
    I am an admin.
  </div>
  <div v-else-if="$userAuth.role === 'user'">
    I am a user.
  </div>
</template>
