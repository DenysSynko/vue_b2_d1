const path = require('path');
const webpack = require('webpack');

module.exports = {
   resolve: {
       alias: {
        'vue$': 'vue/dist/vue.esm.js'
       }
   },
 devServer: {
   static: path.join(__dirname, 'src'),
   compress: true,
   port: 8081
 },
 plugins: [
   new webpack.DefinePlugin({
     __VUE_OPTIONS_API__: true,
     __VUE_PROD_DEVTOOLS__: false
   })
 ]
};
