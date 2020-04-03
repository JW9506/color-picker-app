const path = require("path");
module.exports = {
  webpack: function(config, env) {
    config.resolve.alias = Object.assign({}, config.resolve.alias, {
      components: path.join(__dirname, "src/components")
    });
    return config;
  },
  devServer: function(configFunction) {
    return function(proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.host = "127.0.0.1";
      return config;
    };
  }
};
