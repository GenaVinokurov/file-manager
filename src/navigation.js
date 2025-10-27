import fs from "fs/promises";
import path from "path";
import os from "os";
import { resolvePath, pathExists } from "./utils.js";

/**
 * Go up one directory level
 * @param {string} currentDir - Current working directory
 * @returns {Promise<string>} - New working directory
 */
export const up = async (currentDir) => {
  const rootDir = path.parse(currentDir).root;
  if (currentDir === rootDir) {
    return currentDir;
  }
  return path.resolve(currentDir, "..");
};

/**
 * Change to specified directory
 * @param {string} currentDir - Current working directory
 * @param {string} targetPath - Target directory path (relative or absolute)
 * @returns {Promise<string>} - New working directory
 */
export const cd = async (currentDir, targetPath) => {
  const rootDir = path.parse(currentDir).root;
  if (currentDir === rootDir) {
    return currentDir;
  }
  const newDir = resolvePath(currentDir, targetPath);
  if (await pathExists(newDir)) {
    return newDir;
  }
  return currentDir;
};
/**
 * List contents of current directory
 * @param {string} currentDir - Current working directory
 * @returns {Promise<void>}
 */
export const ls = async (currentDir) => {
  const files = await fs
    .readdir(currentDir, { withFileTypes: true })
    .then((files) => files.sort((a, b) => a.name - b.name));
  console.table(
    files.map((el) => ({
      name: `${el.name}${el.isDirectory() ? "" : path.extname(el.name)}`,
      type: el.isDirectory() ? "directory" : "file",
    }))
  );
};
