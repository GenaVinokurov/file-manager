import crypto from "crypto";
import { createReadStream } from "fs";
import path from "path";

export const calculateHash = async (currentDir, filePath) => {
  const stream = createReadStream(path.join(currentDir, filePath));
  const hash = crypto.createHash("sha256");

  return new Promise((resolve, reject) => {
    stream.on("data", (chunk) => {
      hash.update(chunk);
    });

    stream.on("end", () => {
      const result = hash.digest("hex");
      console.log("Hash:", result);
      resolve(result);
    });

    stream.on("error", (error) => {
      reject(error);
    });
  });
};
