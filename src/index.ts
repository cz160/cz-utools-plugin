import { sites } from "./constant";

// 配置文件
export const PLUGIN_JSON = {
  pluginName: "site-navigation",
  description: "常见网站导航合集",
  version: "0.0.1",
  preload: "./preload.js",
  author: "竹合",
  homepage: "http://www.czhuangjia.top/",
  logo: "logo.png",
  features: [],
};
// 增加快捷命令
function addFeatures(features) {
  PLUGIN_JSON.features = PLUGIN_JSON.features.concat(features);
}
const features = sites.map((site) => {
  const { title, desc } = site;
  return {
    code: title,
    explain: desc,
    cmds: [title],
  };
});

addFeatures(features);
