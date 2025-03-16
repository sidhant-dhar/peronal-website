import type { Theme } from 'unocss/preset-uno'
import {
  defineConfig,
  presetAttributify,
  presetWind3,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'
import presetTheme from 'unocss-preset-theme'
import { themeConfig } from './src/config.ts'

const { light, dark } = themeConfig.color

export default defineConfig({
  presets: [
    presetWind3(),
    presetAttributify(),
    presetTheme<Theme>({
      theme: {
        dark: {
          colors: dark,
        },
      },
    }),
  ],
  theme: {
    colors: light,
    fontFamily: {
      title: ['Snell-Black', 'EarlySummer-Subset', 'EarlySummer', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      navbar: ['STIX-Italic', 'EarlySummer-Subset', 'EarlySummer', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      time: ['Snell-Bold', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      serif: ['STIX', 'EarlySummer', 'Georgia', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
    },
  },
  shortcuts: {
    'uno-tags-style': 'inline-block whitespace-nowrap border border-secondary/25 rounded-full px-3.2 py-0.7 c-secondary transition-colors hover:(border-secondary/75 text-primary)',
    'uno-decorative-line': 'h-0.25 w-10 bg-secondary opacity-25',
    'uno-tags-wrapper': 'mt-4.375 w-95% flex flex-wrap gap-3',
  },
  rules: [
    ['scrollbar-hidden', {
      'scrollbar-width': 'none',
      '-ms-overflow-style': 'none',
    }],
    ['ios-flash-fix', {
      'backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
    }],
    ['force-gpu', {
      'transform': 'translateZ(0)',
      '-webkit-transform': 'translateZ(0)',
    }],
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
