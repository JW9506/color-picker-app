const path = require("path")
module.exports = {
  webpack: function (config, env) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      components: path.join(__dirname, "src/components"),
    })
    const SASS_LOADER = config.module.rules[2].oneOf.find((rules) => {
      if (rules.test instanceof RegExp) return rules.test.test(".scss")
      return false
    })
    SASS_LOADER.use.push({
      loader: "sass-resources-loader",
      options: {
        resources: ["src/global.scss"],
      },
    })
    return config
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost)
      config.host = "127.0.0.1"
      return config
    }
  },
}
