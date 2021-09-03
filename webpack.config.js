const path = require('path')

module.exports = {
    entry: './src/index.js',

    mode: 'production',
     output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js'
    }

    // mode: 'development',
    // devtool:'eval-source-map',
    
    // watch: true,
    // output:{
    //     path:path.resolve(__dirname,'dist'),
    //     filename:'bundle.js'
    // }
   
}