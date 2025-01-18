// A Rollup plugin to convert CommonJS modules to ES6
import commonjs from '@rollup/plugin-commonjs';
// https://rollupjs.org/command-line-interface/#config-intellisense
import { defineConfig } from 'rollup';
// The @rollup/plugin-node-resolve plugin teaches Rollup how to find external modules.
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy'

//
// This project has no barrel files and multiple entry points, so defineConfig() accepts an array of configurations
//
const config = defineConfig(
  [
    {
      input: 'src/content.js',
      output: [
        {
          dir: 'dist',
          format: 'esm',
          preserveModules: true,
        },
      ],
      plugins: [
        resolve(),
        commonjs(),
        copy({
          targets: [
            { src: 'src/hello.html', dest: 'dist' },
            { src: 'src/manifest.json', dest: 'dist' },
          ],
        })
      ],
    },
  ],
);

export default config;
