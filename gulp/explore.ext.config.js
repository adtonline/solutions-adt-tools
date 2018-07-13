const src = 'src';

export default {
  output: {
    path: 'dist'
  },
  entry: {
    css: `${src}/app.scss`,
    js: `${src}/app.js`,
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: {
    copy: [],
    optimize: {
      vendor: [],
      uglifyJs: true,
    },
  },
  watchOptions: {
    css: [`${src}/**/*.scss`],
    js: [`${src}/**/*.js`],
  },
}