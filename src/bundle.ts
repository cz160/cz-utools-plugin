import fs from "fs";
import path from "path";
import vfs from "vinyl-fs";

import { PLUGIN_JSON, NEED_COPY_FILE } from "./index";
import { ensure } from "./utils";

// 输出目录名
const OUTPUT_NAME = "dist";
// 根目录名
const ROOT_DIR = path.resolve(__dirname);
// 输入目录地址
const OUTPUT_DIR = path.resolve(ROOT_DIR, "../", OUTPUT_NAME);
// public文件夹地址
const PUBLIC_DIR = path.resolve(ROOT_DIR, "../public");

// 生成配置文件
async function generatePluginJSON() {
  await ensure(OUTPUT_DIR);
  return fs.promises.writeFile(
    path.resolve(OUTPUT_DIR, "plugin.json"),
    JSON.stringify(PLUGIN_JSON, null, 4)
  );
}
generatePluginJSON();

// 复制文件
function copy(files) {
  const patterns = files;
  vfs.src(patterns).pipe(vfs.dest(OUTPUT_DIR));
}
copy(NEED_COPY_FILE.map((file) => path.resolve(ROOT_DIR, file)));
copy(["**/*"].map((file) => path.resolve(PUBLIC_DIR, file)));
