/**
 * On each successful route change, advance the accent palette and tween
 * `--accent-color` to the new value. Subtle visual differentiation between
 * pages without redoing the whole theme.
 */
export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  const { store, apply } = useAccent()

  // Initial paint after hydration so SSR doesn't get a flash.
  nuxtApp.hook('app:mounted', () => {
    store.pickRandom()
    apply(0)
  })

  router.afterEach((to, from) => {
    if (to.path === from.path) return
    store.advance()
    apply()
  })

  // Re-apply when color mode toggles (light/dark swap).
  const colorMode = useColorMode()
  watch(() => colorMode.value, () => apply(0.35))
})
