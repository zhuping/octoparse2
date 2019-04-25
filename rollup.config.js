const platform = process.env.PLATFORM;
let filePath = platform ? 
    `example/${platform}/bundle.js` :
    `dist/index.js`;

export default {
  input: 'src/index.js',
  output: {
    file: filePath,
    format: 'cjs'
  }
}