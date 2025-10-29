import { createReadStream, createWriteStream } from "fs";
import { createBrotliCompress, createBrotliDecompress } from "zlib";
import { pipeline } from "stream/promises";
import path from "path";

/**
 * Compress file using Brotli algorithm
 * @param {string} source - Source file path
 * @param {string} destination - Destination file path
 * @returns {Promise<void>}
 */
export const compress = async (currentDir, source, destination) => {
  const fullSourcePath = path.join(currentDir, source);
  const fullDestinationPath = path.join(currentDir, destination);
  const readStream = createReadStream(fullSourcePath);
  const writeStream = createWriteStream(fullDestinationPath);
  const brotliCompress = createBrotliCompress();
  await pipeline(readStream, brotliCompress, writeStream);
  console.log(`File ${source} compressed to ${destination} successfully`);
};

/**
 * Decompress file using Brotli algorithm
 * @param {string} source - Compressed file path
 * @param {string} destination - Destination file path
 * @returns {Promise<void>}
 */
export const decompress = async (currentDir, source, destination) => {
  const readStream = createReadStream(path.join(currentDir, source));
  const writeStream = createWriteStream(path.join(currentDir, destination));
  const brotliDecompress = createBrotliDecompress();
  await pipeline(readStream, brotliDecompress, writeStream);
  console.log(`File ${source} decompressed to ${destination} successfully`);
};
