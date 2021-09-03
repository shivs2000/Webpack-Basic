const path = require('path');

module.exports = {
 // entry: path.resolve(__dirname, 'src')+'/script1.js', NOT NEEDED IT WILLL FIND INDEX.JS
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  module:{
    rules: [
      { 
        
        
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        
      
      }
    
    
    ],

  }
   
};