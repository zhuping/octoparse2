import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

const platform = process.env.PLATFORM;
let filePath = platform ? 
    `example/${platform}/bundle.js` :
    `dist/index.js`;

export default {
  input: 'src/index.js',
  output: {
    file: filePath,
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    (!platform && uglify())
  ],
}