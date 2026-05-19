<script setup lang="ts">
useSeoMeta({
  title: 'About — Ian Kluhsman',
  description: 'Systems engineer and full-stack developer with 25+ years spanning enterprise datacenter operations, DevOps, and modern web development. Based in Aurora, CO.'
})

const contact = [
  { icon: 'i-lucide-mail', label: 'iankluhsman@gmail.com', href: 'mailto:iankluhsman@gmail.com', external: false },
  { icon: 'i-simple-icons-github', label: 'github.com/ikluhsman', href: 'https://github.com/ikluhsman', external: true },
  { icon: 'i-simple-icons-linkedin', label: 'linkedin.com/in/iankco', href: 'https://www.linkedin.com/in/iankco/', external: true },
]

const skillCategories = [
  {
    name: 'Infrastructure & Platforms',
    skills: ['VMware ESX/vSphere', 'Citrix (CCA)', 'HyperV', 'IBM AS/400 iSeries', 'HP EVA 4000/6000', 'EMC VNX2', 'EMC CLARiiON CX3-40', 'Cisco IOS', 'Cisco 9000 Fabric', 'SonicWall', 'Tailscale', 'WireGuard', 'Zabbix', 'Logicmonitor', 'Grafana', 'Prometheus', 'ZFS', 'OpenVPN', 'MQTT', 'RabbitMQ', 'Veeam', 'Commvault', 'Veritas NetBackup', 'CA ArcServe']
  },
  {
    name: 'Operating Systems',
    skills: ['Windows Server (NT · 2000 · 2003 · 2008)', 'Linux (Debian · CentOS · Red Hat)', 'UNIX', 'Novell']
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'AWS S3', 'Microsoft Azure', 'Docker', 'Jenkins', 'GitLab', 'GitLab CI', 'MS Build', 'Secret Server (Delinea)']
  },
  {
    name: 'Development',
    skills: ['TypeScript', 'Python', 'FastAPI', 'C# .NET', 'Visual Basic .NET', 'PowerShell', 'Bash', 'Perl', 'C++', 'VBScript', 'HTMX', 'Nuxt.js', 'Vue.js', 'Next.js', 'React', 'TailwindCSS', 'D3.js', 'Greensock', 'Vuetify', 'Sanity CMS']
  },
  {
    name: 'Databases',
    skills: ['SQL Server', 'MS SQL', 'MS Access', 'PostgreSQL', 'Firebase', 'MongoDB']
  },
  {
    name: 'AI & LLM',
    skills: ['Claude API (Anthropic SDK)', 'OpenAI API', 'Ollama', 'LangChain', 'LlamaIndex', 'Claude Code', 'RAG', 'Voyage AI']
  },
]

const experience = [
  {
    role: 'Business Owner',
    employer: 'Technicom Corporation',
    location: 'Aurora, CO',
    dates: 'June 2018 – Present',
    summary: 'Runs a cell tower leasing business and designed the entire monitoring and compliance stack from scratch — Zabbix, IoT devices, site-to-site VPN, and automated NOTAM reporting for FAA/FCC compliance. Migrated from EC2-hosted Cacti to self-hosted Zabbix, cutting hosting costs ~80%, and containerized custom Prometheus exporters for portable multi-site deployment. Built web dashboards in Nuxt.js, Grafana, and D3.js to surface real-time tower status to non-technical stakeholders.'
  },
  {
    role: 'Enterprise Systems Architect',
    employer: 'Synoptek',
    location: 'Greenwood Village, CO',
    dates: 'May 2014 – June 2018',
    summary: 'Served as lead DevOps engineer across 30+ active projects and lead migration engineer post-acquisition, deploying self-hosted GitLab with CI/CD, Jenkins, and Slack hooks while migrating all projects from VSS/Subversion. Designed the Synoptek EDGE hardware product enabling rapid MSP customer onboarding without on-site visits, and led the enterprise-wide deployment of Secret Server as sole privileged-access platform, building hundreds of integrations.'
  },
  {
    role: 'Enterprise Systems Architect',
    employer: 'Critigen (CH2M Hill Subsidiary)',
    location: 'Greenwood Village, CO',
    dates: 'January 2009 – May 2014',
    summary: 'Designed and built MasterList, a proprietary remote access platform covering 5,000+ devices used daily by NOC and ops teams — it survived the Synoptek acquisition. Led simultaneous large-scale migrations: 1,000+ VMs across ESX clusters, 500+ LUNs on EMC VNX2 SAN, 500+ nodes from SolarWinds to Logicmonitor, and multi-tenant data protection infrastructure to a new co-located datacenter.'
  },
  {
    role: 'Enterprise Server Engineer',
    employer: 'CH2M Hill',
    location: 'Englewood, CO',
    dates: 'April 2006 – December 2008',
    summary: 'Authored 50+ integration connectors in Python, Bash, PowerShell, and Perl that became core MSP infrastructure. Led relocation of Citrix farms (150+ apps, hundreds of virtual desktops), data protection covering 1,200+ nodes, and a Communigate POP3 system with 500+ hosted customers. Earned Citrix Certified Administrator (CCA) certificate.'
  },
  {
    role: 'Network Services Engineer',
    employer: 'CH2M Hill Managed Services (City of Glendale)',
    location: 'Glendale, CO',
    dates: 'April 2005 – June 2006',
    summary: 'Sole on-site IT engineer at the City of Glendale municipal complex. Converted the city\'s IBM AS/400 iSeries 520 mainframe to a hybrid on-premise/MSP platform within one year while maintaining 24x7 on-call coverage for Police Dispatch. Served as technical translator between solutions architects and City leadership including the City Manager and Finance Director.'
  },
  {
    role: 'Service Desk Technician',
    employer: 'Microsource',
    location: 'Greenwood Village, CO',
    dates: 'March 2004 – March 2005',
    summary: 'Designed a DSL subscriber provisioning automation system that reduced support call time by 60%. Deployed VMware ESX clustering and Citrix desktop delivery farms in the early days of enterprise virtualization.'
  },
  {
    role: 'Software Developer (Contract)',
    employer: 'Red Rocks Community College',
    location: 'Lakewood, CO',
    dates: 'August 2002 – May 2003',
    summary: 'Built a telecom-based alumni survey application in Visual Basic .NET and a suite of MS Access CRM applications for three college departments. Consulted on database security, identifying and remediating improperly exposed systems and data.'
  },
  {
    role: 'Hardware Technician',
    employer: 'AMC Cancer Research Center',
    location: 'Lakewood, CO',
    dates: 'April 1998 – February 2001',
    summary: 'Began career here while still in high school. Rebuilt the IT helpdesk portal in MS Access/SQL handling ~20 service calls per day, and managed a campus-wide 300-user Novell & Windows NT/2000 network while upgrading ~15 servers from NT to Windows 2000.'
  },
]

const projects = [
  {
    year: '2026',
    name: 'fsbackup',
    employer: 'Personal / Open Source',
    href: 'https://fsbackup.org',
    summary: 'Pull-based Linux backup system using ZFS snapshots, rsync over SSH, age-encrypted S3 offsite with daily/weekly/monthly retention, and a FastAPI + HTMX web UI. Released free and open source at fsbackup.org.'
  },
  {
    year: '2018–Present',
    name: 'Tower Monitoring & FAA/FCC Compliance Platform',
    employer: 'Technicom Corporation',
    href: null,
    summary: 'End-to-end IoT and monitoring platform for cell tower operations — automated NOTAM reporting, Zabbix, site-to-site VPN, LTE backup, and Prometheus exporters. Reduced hosting costs 80% and achieved 99.9% uptime.'
  },
  {
    year: '2014–2018',
    name: 'Synoptek EDGE',
    employer: 'Synoptek',
    href: null,
    summary: 'Hardware-based remote management product enabling rapid MSP service deployment to newly acquired customers, supporting assimilation of multiple acquisitions including EarthLink IT Services and Indusa.'
  },
  {
    year: '2014–2018',
    name: 'Enterprise DevOps Platform',
    employer: 'Synoptek',
    href: null,
    summary: 'Built and led a GitLab + Jenkins CI/CD platform serving 30+ active projects. Migrated all projects from legacy SCM, decomposed monoliths into Docker microservices, and trained ops teams in deployment tooling.'
  },
  {
    year: '2009–2014',
    name: 'MasterList',
    employer: 'Critigen (CH2M Hill Subsidiary)',
    href: null,
    summary: 'Proprietary remote access and management platform covering 5,000+ devices across datacenters and customer premises. Used daily by NOC and engineering teams; survived the Synoptek acquisition and continued in production.'
  },
  {
    year: '2004',
    name: 'DSL Subscriber Provisioning Automation',
    employer: 'Microsource',
    href: null,
    summary: 'Front-end automation system that streamlined DSL subscriber onboarding end-to-end, reducing NOC support call time by 60%.'
  },
]

const education = [
  {
    degree: 'Associate of Applied Science, Computer Information Systems (MCSE Emphasis)',
    school: 'Red Rocks Community College',
    location: 'Lakewood, CO',
    dates: 'August 2002 – May 2004'
  },
  {
    degree: 'High School Diploma',
    school: 'Smoky Hill High School',
    location: 'Aurora, CO',
    dates: '1995 – 1999'
  },
]

const certifications = [
  { name: 'Microsoft Certified Systems Engineer (MCSE)', issuer: 'Microsoft', date: 'February 3, 2004' },
  { name: 'Service Learning Recognition — volunteer TCP/IP network install, 50 PCs', issuer: 'Red Rocks Community College', date: 'May 20, 2004' },
  { name: 'Citrix Certified Administrator (CCA)', issuer: 'Citrix', date: '~2007–2008' },
  { name: 'WeCare Customer Service Training for Technical Service Providers', issuer: 'Davis-Mayo Associates / Jack Parr Associates', date: 'November 2009' },
  { name: 'Nuxt.js – Vue.js on Steroids', issuer: 'Udemy / Academind', date: 'March 5, 2019' },
]

const interests = [
  {
    icon: 'i-lucide-mountain',
    name: 'Whitewater Kayaking',
    summary: 'Paddled the entire 277-mile length of the Grand Canyon in a whitewater kayak. Formerly a backcountry skier.'
  },
  {
    icon: 'i-lucide-camera',
    name: 'Photography',
    summary: 'DSLR, GoPro, and phone — astrophotography, landscape, wildlife, and architectural subjects.'
  },
  {
    icon: 'i-lucide-music',
    name: 'Music',
    summary: 'Plays guitar and produces music for personal enjoyment.'
  },
  {
    icon: 'i-lucide-code',
    name: 'Open Source',
    summary: 'Authored fsbackup and regularly publishes Prometheus exporters and personal projects to GHCR.'
  },
  {
    icon: 'i-lucide-heart',
    name: 'Family & Outdoors',
    summary: 'Lives with two red golden retrievers (Belle and Joey). Enjoys Colorado State Parks, camping, and cares for his father at home.'
  },
]
</script>

<template>
  <div>
    <!-- HERO -->
    <section class="relative overflow-hidden">
      <UContainer class="pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div class="max-w-3xl">
          <UBadge
            color="neutral"
            variant="subtle"
            class="mb-6 font-mono tracking-wider uppercase text-xs"
          >
            <span class="accent">●</span>&nbsp; Aurora, CO · 25+ years
          </UBadge>

          <h1 class="font-display text-4xl sm:text-5xl font-semibold leading-tight text-(--ui-text-highlighted)">
            Ian Kluhsman
          </h1>
          <p class="mt-2 font-display text-xl sm:text-2xl text-(--ui-text-muted) font-normal">
            25+ years across enterprise systems and <span class="accent">full-stack development</span>
          </p>

          <p class="mt-6 text-lg text-(--ui-text-muted) max-w-2xl leading-relaxed">
            Systems engineer and software developer with a track record spanning enterprise datacenter operations, IT managed services, DevOps engineering, and modern web development. Known for leading large-scale infrastructure migrations, building internal toolsets and automation platforms, and translating complex technical work across all levels of an organization.
          </p>

          <div class="mt-8 flex flex-wrap gap-3">
            <a
              v-for="c in contact"
              :key="c.label"
              :href="c.href"
              v-bind="c.external ? { target: '_blank', rel: 'noopener noreferrer' } : {}"
              class="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-(--ui-border)/70 bg-(--ui-bg) text-sm text-(--ui-text-muted) hover:text-(--ui-text-highlighted) hover:border-(--ui-border) transition-colors"
            >
              <UIcon :name="c.icon" class="size-4 accent flex-shrink-0" />
              {{ c.label }}
            </a>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- SKILLS -->
    <section class="border-t border-(--ui-border)/60 bg-(--ui-bg-muted)/30">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mb-12">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">Skills</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">Technical breadth, earned in production.</h2>
          <p class="mt-4 text-(--ui-text-muted)">Accumulated across 25 years of enterprise systems work, development, and independent projects — not certifications chased for the sake of them.</p>
        </div>

        <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <UCard
            v-for="cat in skillCategories"
            :key="cat.name"
            :ui="{ root: 'border border-(--ui-border)/70 bg-(--ui-bg)' }"
          >
            <h3 class="font-display text-base font-semibold text-(--ui-text-highlighted) mb-3">{{ cat.name }}</h3>
            <div class="flex flex-wrap gap-2">
              <UBadge
                v-for="skill in cat.skills"
                :key="skill"
                color="neutral"
                variant="subtle"
                class="text-xs"
              >
                {{ skill }}
              </UBadge>
            </div>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- EXPERIENCE -->
    <section class="border-t border-(--ui-border)/60">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mb-12">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">Experience</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">Where the work came from.</h2>
          <p class="mt-4 text-(--ui-text-muted)">Roles in reverse chronological order. Career began in 1998.</p>
        </div>

        <ol class="relative space-y-10 border-l-2 border-(--ui-border) ml-3">
          <li
            v-for="job in experience"
            :key="job.employer + job.dates"
            class="relative pl-8"
          >
            <!-- dot marker -->
            <span class="absolute -left-[9px] top-1.5 size-4 rounded-full accent-fill border-2 border-(--ui-bg) flex-shrink-0" />

            <div class="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
              <h3 class="font-display text-lg font-semibold text-(--ui-text-highlighted)">{{ job.role }}</h3>
              <span class="text-(--ui-text-muted) text-sm">·</span>
              <span class="text-(--ui-text-highlighted) text-sm font-medium">{{ job.employer }}</span>
            </div>
            <div class="flex flex-wrap gap-x-4 gap-y-1 mb-3">
              <span class="font-mono text-xs text-(--ui-text-muted) uppercase tracking-wide">{{ job.dates }}</span>
              <span class="font-mono text-xs text-(--ui-text-muted)">{{ job.location }}</span>
            </div>
            <p class="text-sm text-(--ui-text-muted) leading-relaxed max-w-3xl">{{ job.summary }}</p>
          </li>
        </ol>
      </UContainer>
    </section>

    <!-- SELECTED PROJECTS -->
    <section class="border-t border-(--ui-border)/60 bg-(--ui-bg-muted)/30">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mb-12">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">Selected Projects</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">Things built that mattered.</h2>
          <p class="mt-4 text-(--ui-text-muted)">A cross-section of significant engineering projects across the career — systems that shipped and stayed in use.</p>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <UCard
            v-for="proj in projects"
            :key="proj.name"
            :ui="{ root: 'group border border-(--ui-border)/70 bg-(--ui-bg) h-full' }"
          >
            <div class="flex items-start justify-between gap-3 mb-2">
              <div>
                <span class="font-mono text-xs accent tracking-widest">{{ proj.year }}</span>
                <h3 class="mt-1 font-display text-lg font-semibold text-(--ui-text-highlighted)">{{ proj.name }}</h3>
                <p class="text-xs text-(--ui-text-muted) mt-0.5">{{ proj.employer }}</p>
              </div>
              <a
                v-if="proj.href"
                :href="proj.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex-shrink-0 mt-1"
              >
                <UIcon name="i-lucide-arrow-up-right" class="size-5 text-(--ui-text-muted) group-hover:accent transition" />
              </a>
            </div>
            <p class="text-sm text-(--ui-text-muted) leading-relaxed">{{ proj.summary }}</p>
          </UCard>
        </div>
      </UContainer>
    </section>

    <!-- EDUCATION + CERTIFICATIONS -->
    <section class="border-t border-(--ui-border)/60">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mb-12">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">Education & Certifications</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">Formal background.</h2>
        </div>

        <div class="grid gap-10 lg:grid-cols-2">
          <!-- Education -->
          <div>
            <h3 class="font-display text-xl font-semibold text-(--ui-text-highlighted) mb-6">Education</h3>
            <div class="space-y-6">
              <div
                v-for="ed in education"
                :key="ed.school"
                class="rounded-xl border border-(--ui-border)/70 bg-(--ui-bg) p-5"
              >
                <p class="font-display text-base font-semibold text-(--ui-text-highlighted)">{{ ed.school }}</p>
                <p class="text-sm text-(--ui-text-muted) mt-1">{{ ed.degree }}</p>
                <div class="flex gap-4 mt-2">
                  <span class="font-mono text-xs text-(--ui-text-muted)">{{ ed.dates }}</span>
                  <span class="font-mono text-xs text-(--ui-text-muted)">{{ ed.location }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Certifications -->
          <div>
            <h3 class="font-display text-xl font-semibold text-(--ui-text-highlighted) mb-6">Certifications & Training</h3>
            <div class="space-y-4">
              <div
                v-for="cert in certifications"
                :key="cert.name"
                class="rounded-xl border border-(--ui-border)/70 bg-(--ui-bg) p-5"
              >
                <p class="text-sm font-medium text-(--ui-text-highlighted)">{{ cert.name }}</p>
                <div class="flex flex-wrap gap-x-4 gap-y-1 mt-1.5">
                  <span class="text-xs text-(--ui-text-muted)">{{ cert.issuer }}</span>
                  <span class="font-mono text-xs accent">{{ cert.date }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- PERSONAL INTERESTS -->
    <section class="border-t border-(--ui-border)/60 bg-(--ui-bg-muted)/30">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mb-12">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">Outside the terminal</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">Personal interests.</h2>
        </div>

        <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="item in interests"
            :key="item.name"
            class="flex gap-4 rounded-xl border border-(--ui-border)/70 bg-(--ui-bg) p-5"
          >
            <UIcon :name="item.icon" class="size-6 accent flex-shrink-0 mt-0.5" />
            <div>
              <p class="font-display text-base font-semibold text-(--ui-text-highlighted)">{{ item.name }}</p>
              <p class="mt-1 text-sm text-(--ui-text-muted) leading-relaxed">{{ item.summary }}</p>
            </div>
          </div>
        </div>
      </UContainer>
    </section>

    <!-- REFERENCES / LETTERS -->
    <section class="border-t border-(--ui-border)/60">
      <UContainer class="py-16 sm:py-24">
        <div class="max-w-2xl mx-auto text-center">
          <p class="font-mono text-xs uppercase tracking-widest accent mb-3">References</p>
          <h2 class="font-display text-3xl sm:text-4xl font-semibold text-(--ui-text-highlighted)">References & letters of recommendation available on request.</h2>
          <p class="mt-4 text-(--ui-text-muted) max-w-xl mx-auto">
            A full reference list and letters of recommendation — including letters from the Mayor of Glendale, the Director of Grants at RRCC, and others — are available on request. Just reach out.
          </p>
          <div class="mt-8">
            <UButton
              color="neutral"
              variant="outline"
              icon="i-lucide-mail"
              to="mailto:iankluhsman@gmail.com?subject=References%20request"
              size="lg"
            >
              Request references
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>
  </div>
</template>
