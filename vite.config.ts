import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import UnoCSS from 'unocss/vite';
import { ViteAliases } from 'vite-aliases';
import vitePluginImp from 'vite-plugin-imp';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    ViteAliases({ prefix: '@', useConfig: true, adjustDuplicates: true }),
    vitePluginImp({
      libList: [
        { libName: 'lodash', libDirectory: '', camel2DashComponentName: false },
      ],
      exclude: ['antd'],
    }),
    UnoCSS(),
    react(),
  ],
});
