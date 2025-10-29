import path from "path";
import fs from "fs/promises";

/**
 * Resolve path (can be relative or absolute)
 * @param {string} currentDir - Current working directory
 * @param {string} inputPath - Input path from user
 * @returns {string} - Resolved absolute path
 */
export const resolvePath = (currentDir, inputPath) => {
  // TODO: Implement path resolution
  // If path is absolute, use it as is
  // If relative, resolve from currentDir
  // Use path.resolve()
  if (path.isAbsolute(inputPath)) {
    return inputPath;
  }
  return path.resolve(currentDir, inputPath);
};

/**
 * Check if path exists
 * @param {string} targetPath - Path to check
 * @returns {Promise<boolean>} - True if exists
 */
export const pathExists = async (targetPath) => {
  try {
    const stats = await fs.stat(targetPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
};

/**
 * Check if path is a directory
 * @param {string} targetPath - Path to check
 * @returns {Promise<boolean>} - True if directory
 */
export const isDirectory = async (targetPath) => {
  // TODO: Implement directory check
  // Use fs.stat() and check isDirectory()
  try {
    const stats = await fs.stat(targetPath);
    return stats.isDirectory();
  } catch {
    return false;
  }
};

/**
 * Get root directory for current path
 * @param {string} currentPath - Current path
 * @returns {string} - Root directory
 */
export const getRootDir = (currentPath) => {
  // Get root directory (e.g., '/' on Unix, 'C:\' on Windows)
  return path.parse(currentPath).root;
};

/**
 * Print current working directory
 * @param {string} dir - Directory path
 */
export const printCurrentDir = (dir) => {
  console.log(`You are currently in ${dir}`);
};

/**
 * Handle operation error
 * @param {Error} error - Error object
 */
export const handleError = (error) => {
  console.log("Operation failed:", error.message);
  // Optionally log error details for debugging
  // console.error(error.message);
};

/**
 * Handle invalid input
 */
export const handleInvalidInput = () => {
  console.log("Invalid input:", error.message);
};

/**
 * Parse command and arguments from input string
 * @param {string} input - User input
 * @returns {Object} - { command, args }
 */
export const parseCommand = (input) => {
  const parts = input.trim().split(/\s+/);
  const command = parts[0];
  const args = parts.slice(1);
  return { command, args };
};
