<script setup lang="ts">
import gsap from 'gsap'

interface Props {
  /** 'mark' = monogram alone; 'wordmark' = monogram + 'ian.kluhsman' */
  variant?: 'mark' | 'wordmark'
  /** Animate stroke-draw on mount. Set false for header (already-drawn) state. */
  draw?: boolean
  /** Continuously pulse the circuit node. */
  pulse?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'mark',
  draw: false,
  pulse: false
})

const root = ref<SVGSVGElement | null>(null)
const node = ref<SVGCircleElement | null>(null)

onMounted(() => {
  if (!root.value) return

  if (props.draw) {
    const paths = root.value.querySelectorAll<SVGPathElement>('path.draw, line.draw')
    paths.forEach((p) => {
      const len = (p as SVGGeometryElement).getTotalLength?.() ?? 200
      gsap.set(p, { strokeDasharray: len, strokeDashoffset: len })
    })
    gsap.to(root.value.querySelectorAll('path.draw, line.draw'), {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: 'power2.inOut',
      stagger: 0.08
    })
    if (node.value) {
      gsap.from(node.value, { opacity: 0, scale: 0, transformOrigin: 'center', duration: 0.5, delay: 1.2 })
    }
  }

  if (props.pulse && node.value) {
    gsap.to(node.value, {
      r: 3.4,
      opacity: 0.55,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })
  }
})
</script>

<template>
  <div :class="['ik-logo inline-flex items-center gap-3 select-none', variant === 'wordmark' ? 'gap-3' : '']">
    <svg
      ref="root"
      viewBox="0 0 96 64"
      fill="none"
      stroke="currentColor"
      stroke-width="3"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="accent h-full w-auto"
      aria-label="IK monogram"
    >
      <!-- left bracket -->
      <path class="draw" d="M14 12 L6 12 L6 52 L14 52" />
      <!-- I -->
      <line class="draw" x1="28" y1="12" x2="28" y2="52" />
      <!-- K -->
      <line class="draw" x1="50" y1="12" x2="50" y2="52" />
      <line class="draw" x1="50" y1="32" x2="66" y2="12" />
      <line class="draw" x1="50" y1="32" x2="66" y2="52" />
      <!-- right bracket -->
      <path class="draw" d="M82 12 L90 12 L90 52 L82 52" />
      <!-- circuit node accent -->
      <circle
        ref="node"
        cx="38"
        cy="32"
        r="2.2"
        fill="currentColor"
        stroke="none"
      />
    </svg>

    <span
      v-if="variant === 'wordmark'"
      class="font-display text-lg sm:text-xl tracking-tight text-(--ui-text-highlighted)"
    >
      ian<span class="accent">.</span>kluhsman
    </span>
  </div>
</template>

<style scoped>
.ik-logo { color: var(--accent-color); }
</style>
