module.exports = {
    resolve: {
        fallback: {
          "fs": false,  // We don't need 'fs' in the browser
          "net": false, // 'net' is a server-side module
          "http": false, // We don't need 'http' in the browser
          "path": require.resolve("path-browserify"), 
          "stream": require.resolve("stream-browserify"),
          "crypto": require.resolve("crypto-browserify"),
          "zlib": require.resolve("browserify-zlib"),
          "querystring": require.resolve("querystring-es3"),
        }
      }
    }      
  