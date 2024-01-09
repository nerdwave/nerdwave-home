import { Breakpoints, useBreakpoints } from "@vueuse/core"

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const

export const useScreenSize =
  <T extends keyof typeof BREAKPOINTS>(breakpoints?: Breakpoints<T>) =>
    useBreakpoints(breakpoints ?? BREAKPOINTS)

export const useScreenSizes = () => {
  const screenSize = useScreenSize()
  const smUnder = screenSize.smaller('sm')
  const mdUnder = screenSize.smaller('md')
  const lgUnder = screenSize.smaller('lg')
  return { smUnder, mdUnder, lgUnder }
}