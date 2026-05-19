import gsap from 'gsap'
import { useAccentStore } from '~/stores/accent'

/**
 * Animates `--accent-color` on :root and syncs `--ui-primary` via useAppConfig
 * so Nuxt UI components (UButton, UNavigationMenu, etc.) track the accent palette.
 */
export function useAccent() {
  const store = useAccentStore()
  const colorMode = useColorMode()
  const appConfig = useAppConfig()

  function apply(duration = 0.6) {
    if (!import.meta.client) return
    const current = store.current
    if (!current) return
    const target = colorMode.value === 'dark' ? current.dark : current.light
    gsap.to(':root', { '--accent-color': target, duration, ease: 'power2.inOut' })
    appConfig.ui.colors.primary = current.name
  }

  return { store, apply }
}
