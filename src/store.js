import { create } from 'zustand'

export const useStore = create((set) => ({
  cursorHoverLabel: null,
  setCursorHoverLabel: (label) => set({ cursorHoverLabel: label }),
  
  activeProject: null,
  setActiveProject: (project) => set({ activeProject: project }),
  
  scrollProgress: 0,
  setScrollProgress: (progress) => set({ scrollProgress: progress }),
  
  activeSection: 'home',
  setActiveSection: (section) => set({ activeSection: section }),
}))
