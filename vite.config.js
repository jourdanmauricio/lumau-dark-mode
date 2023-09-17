// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default {
  build: {
    // También podría ser un diccionario o un array de múltiples puntos de entrada
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'dark-mode',
      // Se agregará la extension apropiada.
      // fileName: 'dark-mode',
      // fileName: (format) => `dark-mode.${format}.js`,
      fileName: 'dark-mode',
    },
  },
};
