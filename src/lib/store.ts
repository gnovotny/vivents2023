import { create } from 'zustand'

type State = {
  displaySignup: boolean
  closeSignup: () => void
  openSignup: () => void
  toggleSignup: () => void

  introVideoComplete: boolean
  finishIntroVideo: () => void
  introProseComplete: boolean
  finishIntroProse: () => void
}
export const useStore = create<State>((set, get) => ({
  displaySignup: false,
  closeSignup: () => set({ displaySignup: false }),
  openSignup: () => set({ displaySignup: true }),
  toggleSignup: () => set({ displaySignup: !get().displaySignup }),

  introVideoComplete: false,
  finishIntroVideo: () => set({ introVideoComplete: true }),
  introProseComplete: false,
  finishIntroProse: () => set({ introProseComplete: true }),
}))
