import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      atoms: '/src/components/atoms',
      molecules: '/src/components/molecules',
      organisms: '/src/components/organisms',
      hooks: '/src/hooks',
      pages: '/src/pages',
      redux: '/src/redux',
      services: '/src/services',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
})
