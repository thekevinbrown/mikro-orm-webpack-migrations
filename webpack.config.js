const path = require("path");
const webpack = require("webpack");

const optionalModules = [
  ...Object.keys(require("knex/package.json").browser),
  ...Object.keys(require("mikro-orm/package.json").peerDependencies)
];

module.exports = {
  target: "node",

  mode: "development",
  // mode: "production",

  entry: path.resolve(__dirname, "src", "index.ts"),
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      }
    ]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  plugins: [
    new webpack.EnvironmentPlugin({ WEBPACK: true }),
    new webpack.IgnorePlugin({
      checkResource: rsrc => {
        if (optionalModules.includes(rsrc.split("/")[0])) {
          try {
            require.resolve(rsrc);
            return false;
          } catch {
            return true;
          }
        }

        return false;
      }
    }),
    new webpack.IgnorePlugin({ resourceRegExp: /^ts-node$/ })
  ]
};
