import crypto from "crypto";
import { createReadStream } from "fs";

/**
 * Calculate hash for file
 * @param {string} filePath - Path to file
 * @returns {Promise<string>} - Hex hash string
 */
export const calculateHash = async (filePath) => {
  // TODO: Implement hash calculation
  // Create read stream from file
  // Create hash (sha256)
  // Update hash with stream data
  // Return final hash digest as hex
  throw new Error("Not implemented");
};
