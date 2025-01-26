import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';
import fs from 'fs';


export default defineConfig({
  // base: '/vanilla-play/',
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //     },
  //   },
  // },
  plugins: [
    tailwindcss(),
    // {
    //   name: '404-html',
    //   closeBundle() {
    //     fs.copyFileSync('dist/index.html', 'dist/404.html');
    //   },
    // },
  ],
  
})