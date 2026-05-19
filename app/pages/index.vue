<script setup lang="ts">
useSeoMeta({
  title: 'Ian Kluhsman — Developer in the Denver Area',
  description: "I'm Ian, a developer in the Denver area. Independent technologist building web apps, mobile apps, and IT systems — selective consulting and contract work."
})

const services = [
  {
    icon: 'i-lucide-globe',
    title: 'Web Development',
    description: 'Nuxt / Vue / TypeScript apps with clean APIs, sensible auth, and Tailwind UI you can live with for years.'
  },
  {
    icon: 'i-lucide-smartphone',
    title: 'Mobile Applications',
    description: 'PWAs and mobile-first experiences tuned for the field — offline behavior, sync, and real-world data.'
  },
  {
    icon: 'i-lucide-server',
    title: 'IT Consulting',
    description: 'Datacenter, networking, monitoring, and DevOps strategy. 25+ years of enterprise systems work.'
  }
]

const portfolio = [
  {
    title: 'h2oflows.app',
    tag: 'Realtime water gauge intelligence',
    body: 'A live river-flow and reach intelligence platform for paddlers and water managers. Built on Nuxt 4, FastAPI, MapLibre, Supabase, and a custom DWR/USGS ingest layer.',
    to: 'https://h2oflows.app',
    accent: 'water'
  },
  {
    title: 'fsbackup.org',
    tag: 'ZFS-backed Linux backup tool',
    body: 'A pull-based Linux backup system using ZFS snapshots, rsync over SSH, age-encrypted S3 offsite, and a FastAPI + HTMX UI. Free and open source.',
    to: 'https://fsbackup.org',
    accent: 'storage'
  }
]

const process = [
  { step: '01', title: 'Initial Consultation', body: 'A short call or written exchange to understand the problem and decide together whether it\'s a fit.' },
  { step: '02', title: 'Project Proposal', body: 'A scoped proposal: outcomes, approach, mental-space estimate, and what success looks like.' },
  { step: '03', title: 'Build', body: 'Steady, low-noise development. Tight feedback loops. No surprises.' },
  { step: '04', title: 'Delivery', body: 'Handoff, documentation, and an honest answer on what to do next.' }
]
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden">
      <UContainer class="pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div class="grid lg:grid-cols-12 gap-10 items-center">
          <div class="lg:col-span-7 order-2 lg:order-1">
            <UBadge
              color="neutral"
              variant="subtle"
              class="mb-6 font-mono tracking-wider uppercase text-xs"
            >
              <span class="accent">●</span>&nbsp; Available · Denver area
            </UBadge>

            <h1 class="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-(--ui-text-highlighted)">
              I'm Ian, a
              <span class="accent accent-glow">developer</span>
              in the Denver area.
            </h1>

            <p class="mt-6 text-lg sm:text-xl text-(--ui-text-muted) max-w-2xl">
              25 years of systems engineering and full-stack work — websites, mobile apps, and IT consulting for projects worth thinking about. I take on a small number of selective engagements at a time, run from Aurora, Colorado.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <UButton
                size="xl"
                color="primary"
                trailing-icon="i-lucide-arrow-right"
                to="#contact"
              >
                Start a conversation
              </UButton>
              <UButton
                size="xl"
                color="neutral"
                variant="outline"
                to="/about"
              >
                Read about me
              </UButton>
            </div>

            <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-(--ui-text-muted)">
              <span class="font-mono text-xs uppercase tracking-wider opacity-70">Currently shipping</span>
              <NuxtLink to="https://h2oflows.app" target="_blank" class="hover:text-(--ui-text-highlighted) underline-offset-4 hover:underline">h2oflows.app</NuxtLink>
              <span class="opacity-40">·</span>
              <NuxtLink to="https://fsbackup.org" target="_blank" class="hover:text-(--ui-text-highlighted) underline-offset-4 hover:underline">fsbackup.org</NuxtLink>
              <span class="opacity-40">·</span>
              <NuxtLink to="https://github.com/ikluhsman" target="_blank" class="hover:text-(--ui-text-highlighted) underline-offset-4 hover:underline">github.com/ikluhsman</NuxtLink>
            </div>
          </div>

          <div class="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative">
              <div class="absolute inset-0 blur-3xl accent-fill opacity-10 rounded-full" />
              <IKLogo
                draw
                pulse
                class="relative h-40 sm:h-48 lg:h-56"
              />
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- SERVICES -->
    <section class="border-t border-(--ui-border)/60 bg-(--ui-bg-muted)/30">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mb-12">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">What I do</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">Three things, taken seriously.</h2>
          <p class="mt-4 text-(--ui-text-muted)">Each one informs the others. The web work draws on the systems work; the systems work was, for a long time, the day job.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-3">
          <UCard
            v-for="s in services"
            :key="s.title"
            :ui="{ root: 'h-full border border-(--ui-border)/70 bg-(--ui-bg) hover:accent-border transition' }"
          >
            <UIcon :name="s.icon" class="size-7 accent mb-4" />
            <h3 class="font-display text-xl font-semibold text-(--ui-text-highlighted)">{{ s.title }}</h3>
            <p class="mt-2 text-sm text-(--ui-text-muted) leading-relaxed">{{ s.description }}</p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- PORTFOLIO -->
    <section class="border-t border-(--ui-border)/60">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mb-12">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">Owned projects</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">Free and open, shipped by hand.</h2>
          <p class="mt-4 text-(--ui-text-muted)">Two FOSS projects I own, build, and run. Both are real software with real users — not portfolio props.</p>
        </div>

        <div class="grid gap-6 md:grid-cols-2">
          <UCard
            v-for="p in portfolio"
            :key="p.title"
            :ui="{ root: 'group h-full border border-(--ui-border)/70 bg-(--ui-bg) overflow-hidden' }"
          >
            <div class="flex items-start justify-between">
              <div>
                <p class="font-mono text-xs uppercase tracking-widest text-(--ui-text-muted)">{{ p.tag }}</p>
                <h3 class="mt-1 font-display text-2xl font-semibold text-(--ui-text-highlighted)">{{ p.title }}</h3>
              </div>
              <UIcon name="i-lucide-arrow-up-right" class="size-5 text-(--ui-text-muted) group-hover:accent transition" />
            </div>
            <p class="mt-4 text-sm text-(--ui-text-muted) leading-relaxed">{{ p.body }}</p>
            <div class="mt-6">
              <UButton
                :to="p.to"
                target="_blank"
                rel="noopener noreferrer"
                color="neutral"
                variant="outline"
                trailing-icon="i-lucide-external-link"
              >
                Visit {{ p.title }}
              </UButton>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- PROCESS -->
    <section class="border-t border-(--ui-border)/60 bg-(--ui-bg-muted)/30">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mb-12">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">How it goes</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">A short, honest process.</h2>
          <p class="mt-4 text-(--ui-text-muted)">No hourly rates. No retainer pressure. Work is billed against <em>mental space</em>: roughly the fraction of attention a project will require from me over a given month. Simple, transparent, and self-limiting.</p>
        </div>

        <ol class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <li
            v-for="p in process"
            :key="p.step"
            class="rounded-xl border border-(--ui-border)/70 bg-(--ui-bg) p-6"
          >
            <div class="font-mono text-xs accent tracking-widest mb-3">{{ p.step }}</div>
            <h3 class="font-display text-lg font-semibold text-(--ui-text-highlighted)">{{ p.title }}</h3>
            <p class="mt-2 text-sm text-(--ui-text-muted) leading-relaxed">{{ p.body }}</p>
          </li>
        </ol>

        <p class="mt-10 text-sm text-(--ui-text-muted) max-w-2xl">
          I don't take on every project. Available development time is limited and I'm selective — both to do good work and to keep my own life in good order. Reach out and let's see if it's a fit.
        </p>
      </UContainer>
    </section>

    <!-- CONTACT CTA -->
    <section id="contact" class="border-t border-(--ui-border)/60">
      <UContainer class="py-20 sm:py-28">
        <div class="max-w-3xl mx-auto text-center">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">Get in touch</p>
          <h2 class="font-display text-3xl sm:text-5xl font-semibold text-(--ui-text-highlighted)">
            If your project is interesting,
            <span class="accent">let's talk.</span>
          </h2>
          <p class="mt-6 text-lg text-(--ui-text-muted)">
            The quickest way to reach me is by email. If you'd rather support open-source work, my Sponsors and Buy Me a Coffee links are below.
          </p>

          <div class="mt-10 flex flex-wrap justify-center gap-3">
            <UButton
              size="xl"
              color="primary"
              icon="i-lucide-mail"
              to="mailto:iankluhsman@gmail.com?subject=Project%20inquiry"
            >
              iankluhsman@gmail.com
            </UButton>
            <UButton
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-simple-icons-github"
              to="https://github.com/ikluhsman"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </UButton>
            <UButton
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-lucide-heart"
              to="https://github.com/sponsors/ikluhsman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sponsor
            </UButton>
            <UButton
              size="xl"
              color="neutral"
              variant="outline"
              icon="i-simple-icons-buymeacoffee"
              to="https://www.buymeacoffee.com/ikluhsman"
              target="_blank"
              rel="noopener noreferrer"
            >
              Buy me a coffee
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
