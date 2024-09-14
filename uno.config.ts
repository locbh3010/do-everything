import {
  defineConfig,
  presetUno,
  presetWebFonts,
  presetMini,
  transformerVariantGroup,
} from 'unocss';
import { presetScalpel } from 'unocss-preset-scalpel';
import { presetGrid } from 'unocss-preset-grid';

export default defineConfig({
  transformers: [transformerVariantGroup()],
  presets: [
    presetUno(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Poppins, Arial, sans-serif',
      },
    }),
    presetMini(),
    presetScalpel(),
    presetGrid(),
  ],
  theme: {
    breakpoints: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
  },
});
