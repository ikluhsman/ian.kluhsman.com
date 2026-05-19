import { defineStore } from 'pinia'

export const useAccentStore = defineStore('accent', {
  state: () => ({
    // Tech-inspired palette — professional, calm, never neon.
    palette: [
      { name: 'sky',     light: '#0ea5e9', dark: '#38bdf8' },
      { name: 'cyan',    light: '#06b6d4', dark: '#22d3ee' },
      { name: 'teal',    light: '#14b8a6', dark: '#2dd4bf' },
      { name: 'emerald', light: '#10b981', dark: '#34d399' },
      { name: 'indigo',  light: '#6366f1', dark: '#818cf8' },
      { name: 'violet',  light: '#8b5cf6', dark: '#a78bfa' }
    ],
    index: 0
  }),
  getters: {
    current: state => state.palette[state.index] ?? state.palette[0]
  },
  actions: {
    advance() {
      this.index = (this.index + 1) % this.palette.length
    },
    pickRandom() {
      if (this.palette.length < 2) return
      let next = this.index
      while (next === this.index) {
        next = Math.floor(Math.random() * this.palette.length)
      }
      this.index = next
    }
  }
})
