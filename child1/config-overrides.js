module.exports = function override(config, env) {
  config.output = {
    ...config.output,
    library: "child1",
    libraryTarget: "umd",
    jsonpFunction: `webpackJsonp_child1`,
  };
  return config;
};
