// const presets = ["@babel/preset-env"];
module.exports = function (api) { // eslint-disable-line
  const env = api.env();
  const presets = [["@babel/preset-env"]];
  const plugins = [];

  if (env === 'production') {
    presets[0].push({
      "targets": {
        "browsers": "> 0.25%, not dead",
        "node": "6.8"
      }, // 配置目标环境
      "modules": false // 阻止 babel 将模块转成commonjs
    });
    plugins.push(["@babel/plugin-transform-runtime"]);
    // plugins.push(["@babel/plugin-transform-runtime", { "corejs": 2 }]); 当需要依赖ES6中的 扩展内置的对象或者方法的时候开启这个配置项
    // 比如：str.includes() Set Map
  }

  return {
    presets,
    plugins
  }
};
