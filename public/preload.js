const { sites } = require("./constants");

function getConfigWithNameAndCallback(features) {
  return features
    .map((feature) => {
      const { name, callback } = feature;
      return {
        [name]: {
          mode: "none",
          args: {
            // 进入插件时调用
            enter: callback,
          },
        },
      };
    })
    .reduce((siteMap, prev) => {
      return {
        ...siteMap,
        ...prev,
      };
    }, {});
}
// 获取导航配置
function getSiteConfig() {
  return sites.map((site) => {
    const { title, url } = site;
    return {
      name: title,
      callback: () => {
        utools.shellOpenExternal(url); // 系统默认协议打开Url
        utools.outPlugin(); // 退出插件
      },
    };
  });
}

// 无UI模式： 参考文档：https://u.tools/docs/developer/template.html#plugin-json-%E6%96%87%E4%BB%B6
const wholeConfigures = {
  ...getConfigWithNameAndCallback(getSiteConfig()),
};
console.log(wholeConfigures);
window.exports = wholeConfigures;
