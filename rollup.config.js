import { chromeExtension, simpleReloader } from 'rollup-plugin-chrome-extension';
// A Rollup plugin to convert CommonJS modules to ES6
import commonjs from '@rollup/plugin-commonjs';
// https://rollupjs.org/command-line-interface/#config-intellisense
import { defineConfig } from 'rollup';
// The @rollup/plugin-node-resolve plugin teaches Rollup how to find external modules.
import resolve from '@rollup/plugin-node-resolve';

const config = defineConfig({
  input: 'src/manifest.json',
  output: {
    dir: 'dist',
    format: 'esm',
  },
  plugins: [
    // always put chromeExtension() before other plugins
    chromeExtension(),

    simpleReloader(),
    resolve(),
    commonjs(),
  ],
});

export default config;
