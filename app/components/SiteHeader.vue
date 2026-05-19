<script setup lang="ts">
const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' }
]
</script>

<template>
  <UHeader
    :ui="{
      root: 'bg-(--ui-bg)/70 backdrop-blur-md border-b border-(--ui-border)/60'
    }"
  >
    <template #left>
      <NuxtLink to="/" class="flex items-center" aria-label="ian.kluhsman.com home">
        <IKLogo variant="wordmark" class="h-7 sm:h-8" />
      </NuxtLink>
    </template>

    <template #right>
      <UNavigationMenu
        :items="links"
        variant="link"
        color="primary"
        class="hidden sm:flex"
      />
      <UColorModeButton />
      <UButton
        to="https://github.com/ikluhsman"
        target="_blank"
        rel="noopener noreferrer"
        icon="i-simple-icons-github"
        aria-label="GitHub"
        color="neutral"
        variant="ghost"
      />
    </template>

    <template #body>
      <UNavigationMenu
        :items="links"
        orientation="vertical"
        color="primary"
        class="sm:hidden"
      />
    </template>
  </UHeader>
</template>
