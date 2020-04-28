module.exports = function override(config, env) {
  config.output = {
    ...config.output,
    library: "child1",
    libraryTarget: "umd",
    globalObject: "window",
    jsonpFunction: `webpackJsonp_child1`,
    publicPath: `//localhost:3001/`,
  };
  return config;
};
