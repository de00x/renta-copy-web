import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import {defineConfig} from 'vite'

export default defineConfig({
    plugins: [react(), svgr()],
    resolve: {
        alias: {
            app: '/src/app',
            shared: '/src/shared',
            feature: '/src/feature',
            entities: '/src/entities',
            pages: '/src/pages',
            assets: '/src/assets',
            widgets: '/src/widgets'
        },
    },
})
