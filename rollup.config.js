import resolve from 'rollup-plugin-node-resolve';
import pkg from './package.json';

export default {
  input: 'src/index.js',
  output: {
    name: 'lib',
    file: pkg.main,
    format: 'esm'
  },
  plugins: [
    resolve()
  ]
};
