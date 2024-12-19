const path = require('path');

module.exports = {
    // Other configurations...
    resolve: {
        fallback: {
            zlib: require.resolve("browserify-zlib"),
            querystring: require.resolve("querystring-es3"),
            path: require.resolve("path-browserify"),
            crypto: require.resolve("crypto-browserify"),
            stream: require.resolve("stream-browserify"),
            util: require.resolve("util/"),
            buffer: require.resolve("buffer/"),
            fs: false, // `fs` cannot be polyfilled for the browser.
            url: require.resolve("url/"),
            http: require.resolve("stream-http"),
            net: false, // `net` is Node.js-specific.
        },
    },
};
