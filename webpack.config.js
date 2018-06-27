var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist"); //where you copy serve build
var SRC_DIR = path.resolve(__dirname, "src"); // where to get

var config = {
    entry: SRC_DIR + "/app/index.js", //entry point / first file to start transfiling
    output: {
        path: DIST_DIR + "/app",
        filename: "bundle.js",
        publicPath: "/app/"
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js?/,
                include: SRC_DIR,
                loader: "babel-loader",
                query: {
                    presets:[
                        "react",
                        "es2015",
                        "stage-2"
                    ]
                }
            }
        ]
    }
};

module.exports = config;

