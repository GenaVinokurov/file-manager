import fs from "fs/promises";
import { createReadStream, createWriteStream } from "fs";
import path from "path";
import { pipeline } from "stream/promises";

/**
 * Read and print file contents using streams
 * @param {string} filePath - Path to file
 * @returns {Promise<void>}
 */
export const cat = async (filePath) => {
  // TODO: Implement reading file with streams
  // Create readable stream
  // Pipe to process.stdout
  throw new Error("Not implemented");
};

/**
 * Create empty file
 * @param {string} currentDir - Current working directory
 * @param {string} fileName - Name of new file
 * @returns {Promise<void>}
 */
export const add = async (currentDir, fileName) => {
  // TODO: Implement creating empty file
  // Use fs.writeFile with empty content
  throw new Error("Not implemented");
};

/**
 * Create new directory
 * @param {string} currentDir - Current working directory
 * @param {string} dirName - Name of new directory
 * @returns {Promise<void>}
 */
export const mkdir = async (currentDir, dirName) => {
  // TODO: Implement creating directory
  // Use fs.mkdir
  throw new Error("Not implemented");
};

/**
 * Rename file
 * @param {string} oldPath - Current file path
 * @param {string} newName - New file name
 * @returns {Promise<void>}
 */
export const rn = async (oldPath, newName) => {
  // TODO: Implement renaming file
  // Use fs.rename
  // Keep file in same directory, just change name
  throw new Error("Not implemented");
};

/**
 * Copy file using streams
 * @param {string} source - Source file path
 * @param {string} destination - Destination directory path
 * @returns {Promise<void>}
 */
export const cp = async (source, destination) => {
  // TODO: Implement copying file with streams
  // Create read stream from source
  // Create write stream to destination
  // Use pipeline to pipe streams
  throw new Error("Not implemented");
};

/**
 * Move file (copy + delete original)
 * @param {string} source - Source file path
 * @param {string} destination - Destination directory path
 * @returns {Promise<void>}
 */
export const mv = async (source, destination) => {
  // TODO: Implement moving file
  // First copy file using streams (like cp)
  // Then delete original with fs.unlink
  throw new Error("Not implemented");
};

/**
 * Delete file
 * @param {string} filePath - Path to file to delete
 * @returns {Promise<void>}
 */
export const rm = async (filePath) => {
  // TODO: Implement deleting file
  // Use fs.unlink
  throw new Error("Not implemented");
};
