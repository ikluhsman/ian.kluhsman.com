<script setup lang="ts">
const route = useRoute()
const config = useRuntimeConfig()

const title = 'Ian Kluhsman — Developer in the Denver Area'
const description = "I'm Ian, a developer in the Denver area. Independent web, mobile, and IT consulting — selective projects, 25+ years of systems experience."

useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'canonical', href: config.public.siteUrl + route.path }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        'name': 'Ian Kluhsman',
        'url': config.public.siteUrl,
        'jobTitle': 'Software Developer & IT Consultant',
        'address': {
          '@type': 'PostalAddress',
          'addressLocality': 'Aurora',
          'addressRegion': 'CO',
          'addressCountry': 'US'
        },
        'sameAs': [
          'https://github.com/ikluhsman',
          'https://www.linkedin.com/in/iankco/'
        ]
      })
    }
  ]
})

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: config.public.siteUrl,
  ogImage: config.public.siteUrl + '/og-image.png',
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Ian Kluhsman — Developer in the Denver area',
  ogSiteName: 'ian.kluhsman.com',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: config.public.siteUrl + '/og-image.png',
  author: 'Ian Kluhsman',
  keywords: 'Ian Kluhsman, Denver developer, Aurora Colorado developer, web development, mobile app development, IT consulting, Nuxt, Vue, FastAPI'
})
</script>

<template>
  <UApp>
    <SiteHeader />
    <UMain>
      <NuxtPage />
    </UMain>
    <SiteFooter />
  </UApp>
</template>
