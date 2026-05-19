import gsap from 'gsap'
import { useAccentStore } from '~/stores/accent'

/**
 * Animates `--accent-color` on :root + html.dark to the active palette entry.
 * gsap tweens hex strings via the CSSPlugin's hex-to-rgb interpolation.
 */
export function useAccent() {
  const store = useAccentStore()
  const colorMode = useColorMode()

  function apply(duration = 0.6) {
    if (!import.meta.client) return
    const current = store.current
    if (!current) return
    const target = colorMode.value === 'dark' ? current.dark : current.light
    gsap.to(':root', { '--accent-color': target, duration, ease: 'power2.inOut' })
  }

  return { store, apply }
}
