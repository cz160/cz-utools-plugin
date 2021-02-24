import fs from "fs";
import path from "path";

import { ensureDirSync } from "fs-extra";

async function ensureDir(dir) {
  try {
    await fs.promises.access(dir);
  } catch (err) {
    ensureDirSync(dir);
  }
  return true;
}
async function ensureFileDir(filepath) {
  const { dir } = path.parse(filepath);
  return ensureDir(dir);
}
export function ensure(filepath) {
  const { ext } = filepath;
  if (ext === undefined) {
    return ensureDir(filepath);
  }
  return ensureFileDir(filepath);
}
