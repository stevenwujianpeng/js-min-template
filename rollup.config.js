// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import { main, module } from './package.json';

export default {
  input: 'src/index.js',
  output: [{
    file: main,
    format: 'cjs'
  }, {
      file: module,
    format: 'es'
  }],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      runtimeHelpers: true
    })
  ],
  // 需要通过require()引入，而不是直接将代码注入到你的包文件中的配置项
  external: []
};
