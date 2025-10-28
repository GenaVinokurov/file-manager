import fs from "fs/promises";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";

/**
 * Read and print file contents using streams
 * @param {string} filePath - Path to file
 * @returns {Promise<void>}
 */
export const cat = async (currentDir, filePath) => {
  const fullPath = path.resolve(currentDir, filePath);
  const stream = createReadStream(fullPath, { encoding: "utf-8" });
  stream.pipe(process.stdout);
  await new Promise((resolve, reject) => {
    stream.on("end", resolve);
    stream.on("error", reject);
  });
};

/**
 * Create empty file
 * @param {string} currentDir - Current working directory
 * @param {string} fileName - Name of new file
 * @returns {Promise<void>}
 */
export const add = async (currentDir, fileName) => {
  await fs.writeFile(path.resolve(currentDir, fileName), "");
  console.log(`File ${fileName} created successfully`);
};

/**
 * Create new directory
 * @param {string} currentDir - Current working directory
 * @param {string} dirName - Name of new directory
 * @returns {Promise<void>}
 */
export const mkdir = async (currentDir, dirName) => {
  fs.mkdir(path.resolve(currentDir, dirName));
  console.log(`Directory ${dirName} created successfully`);
};

/**
 * Rename file
 * @param {string} oldPath - Current file path
 * @param {string} newName - New file name
 * @returns {Promise<void>}
 */
export const rn = async (currentDir, oldPath, newName) => {
  fs.rename(
    path.resolve(currentDir, oldPath),
    path.resolve(currentDir, newName)
  );
  console.log(`File ${oldPath} renamed to ${newName} successfully`);
};

/**
 * Copy file using streams
 * @param {string} source - Source file path
 * @param {string} destination - Destination directory path
 * @returns {Promise<void>}
 */
export const cp = async (currentDir, source, destination) => {
  const readStream = createReadStream(path.resolve(currentDir, source));
  const writeStream = createWriteStream(path.resolve(currentDir, destination));
  await pipeline(readStream, writeStream);
  console.log(`File ${source} copied to ${destination} successfully`);
};

/**
 * Move file (copy + delete original)
 * @param {string} source - Source file path
 * @param {string} destination - Destination directory path
 * @returns {Promise<void>}
 */
export const mv = async (currentDir, source, destination) => {
  const readStream = createReadStream(path.resolve(currentDir, source));
  const writeStream = createWriteStream(path.resolve(currentDir, destination));
  await pipeline(readStream, writeStream);
  await fs.unlink(path.resolve(currentDir, source));
  console.log(`File ${source} moved to ${destination} successfully`);
};

/**
 * Delete file
 * @param {string} filePath - Path to file to delete
 * @returns {Promise<void>}
 */
export const rm = async (currentDir, filePath) => {
  await fs.unlink(path.resolve(currentDir, filePath));
  console.log(`File ${filePath} deleted successfully`);
};
