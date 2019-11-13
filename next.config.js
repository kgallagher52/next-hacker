//https://www.udemy.com/course/universal-react-with-nextjs-the-ultimate-guide/learn/lecture/12505170#overview

// Need to use a comment JS to bring in the package needed
const SWPrecachWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = {
  // webpack property exposes a function that gives us access to the configuration of the webpack. 
  webpack: config => {
    //config.pluging.push - Will allow us to push new plugins = [] into our webpack
    config.plugins.push(
      new SWPrecachWebpackPlugin({
         //Configuration objects
         //Minify our serviceWorker.js
        minify: true,
        //Files we want to ignore
        staticFileGlobsIgnorePatterns: [/\.next\//],
        //Caching stratagy
        runtimeCaching:  [
          {
            handler: 'networkFirst',
            urlPattern: /^https?.*/
          }
        ]
      })
    )
    return config;
  }
}