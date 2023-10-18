const { mergeWithRules } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "serengeti",
    projectName: "nav",
    webpackConfigEnv,
    argv,
  });

  const devMode = argv.mode !== "production";

  const extractCss = new MiniCssExtractPlugin({
    filename: "nav.css",
    ignoreOrder: false,
    chunkFilename: "[id].css",
  });

  return mergeWithRules({
    module: {
      rules: {
        test: "match",
        use: "replace",
      },
    },
  })(defaultConfig, {
    plugins: [].concat(devMode ? [] : [extractCss]),
    devServer: {
      port: 3001,
    },
    module: {
      rules: [
        {
          test: /\.css$/i,
          use: [
            devMode
              ? require.resolve("style-loader", {
                  paths: [require.resolve("webpack-config-single-spa")],
                })
              : MiniCssExtractPlugin.loader,
            require.resolve("css-loader", {
              paths: [require.resolve("webpack-config-single-spa")],
            }),
          ],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: "asset/resource",
        },
      ],
    },
  });
};
