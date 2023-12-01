import type { Config } from 'tailwindcss'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.ts'

export const twConfig = resolveConfig(tailwindConfig)