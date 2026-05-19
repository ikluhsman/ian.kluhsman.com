<script setup lang="ts">
const socials = [
  { label: 'GitHub', icon: 'i-simple-icons-github', to: 'https://github.com/ikluhsman' },
  { label: 'LinkedIn', icon: 'i-simple-icons-linkedin', to: 'https://www.linkedin.com/in/iankco/' },
  { label: 'GitHub Sponsors', icon: 'i-lucide-heart', to: 'https://github.com/sponsors/ikluhsman' },
  { label: 'Buy Me a Coffee', icon: 'i-simple-icons-buymeacoffee', to: 'https://www.buymeacoffee.com/ikluhsman' }
]

const year = new Date().getFullYear()
</script>

<template>
  <UFooter
    :ui="{
      root: 'border-t border-(--ui-border)/60 bg-(--ui-bg)/70 backdrop-blur-sm'
    }"
  >
    <template #left>
      <div class="flex items-center gap-3 text-sm text-(--ui-text-muted)">
        <IKLogo class="h-5" />
        <span>© {{ year }} Ian Kluhsman</span>
      </div>
    </template>

    <template #right>
      <UTooltip
        v-for="s in socials"
        :key="s.label"
        :text="s.label"
      >
        <UButton
          :to="s.to"
          :icon="s.icon"
          :aria-label="s.label"
          target="_blank"
          rel="noopener noreferrer"
          color="neutral"
          variant="ghost"
        />
      </UTooltip>
    </template>
  </UFooter>
</template>
