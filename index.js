import readline from "readline/promises";
import { stdin as input, stdout as output } from "node:process";
import os from "os";

// Import command handlers
import { up, cd, ls } from "./src/navigation.js";
import { cat, add, mkdir, rn, cp, mv, rm } from "./src/files.js";
import {
  getEOL,
  getCPUs,
  getHomeDir,
  getUsername,
  getArchitecture,
} from "./src/system.js";
import { calculateHash } from "./src/hash.js";
import { compress, decompress } from "./src/compression.js";
import {
  parseCommand,
  printCurrentDir,
  handleError,
  handleInvalidInput,
} from "./src/utils.js";

const start = async () => {
  // Parse username argument
  const args = process.argv.slice(2);
  const usernameArg = args.find((arg) => arg.startsWith("--username="));

  if (!usernameArg) {
    console.error("Error: --username argument is required");
    process.exit(1);
  }

  const username = usernameArg.split("=")[1];

  if (!username) {
    console.error("Error: username value cannot be empty");
    process.exit(1);
  }

  // Welcome message
  console.log(`Welcome to the File Manager, ${username}!`);

  // Initialize current working directory
  let currentDir = os.homedir();
  printCurrentDir(currentDir);

  // Setup readline interface
  const rl = readline.createInterface({
    input,
    output,
    prompt: ">>",
  });

  const cleanup = () => {
    console.log(`\nThank you for using File Manager, ${username}, goodbye!`);
    rl.close();
    process.exit(0);
  };

  // Handle Ctrl+C
  process.on("SIGINT", cleanup);

  // Handle user input
  rl.on("line", async (input) => {
    const trimmedInput = input.trim();

    // Handle exit command
    if (trimmedInput === ".exit") {
      cleanup();
      return;
    }

    // Skip empty input
    if (!trimmedInput) {
      printCurrentDir(currentDir);
      return;
    }

    try {
      // Parse command
      const { command, args } = parseCommand(trimmedInput);

      // Route to appropriate handler
      switch (command) {
        // Navigation commands
        case "up":
          currentDir = await up(currentDir);
          break;

        case "cd":
          if (args.length < 1) {
            handleInvalidInput();
          } else {
            currentDir = await cd(currentDir, args[0]);
          }
          break;

        case "ls":
          await ls(currentDir);
          break;

        // File operations
        case "cat":
          if (args.length < 1) {
            handleInvalidInput();
          } else {
            await cat(currentDir, args[0]);
          }
          break;

        case "add":
          if (args.length < 1) {
            handleInvalidInput();
          } else {
            await add(currentDir, args[0]);
          }
          break;

        case "mkdir":
          if (args.length < 1) {
            handleInvalidInput();
          } else {
            await mkdir(currentDir, args[0]);
          }
          break;

        case "rn":
          if (args.length < 2) {
            handleInvalidInput();
          } else {
            console.log("rn args", args);
            await rn(currentDir, args[0], args[1]);
          }
          break;

        case "cp":
          if (args.length < 2) {
            handleInvalidInput();
          } else {
            await cp(currentDir, args[0], args[1]);
          }
          break;

        case "mv":
          if (args.length < 2) {
            handleInvalidInput();
          } else {
            await mv(currentDir, args[0], args[1]);
          }
          break;

        case "rm":
          if (args.length < 1) {
            handleInvalidInput();
          } else {
            await rm(currentDir, args[0]);
          }
          break;

        // OS info commands
        case "os":
          if (args.length < 1) {
            handleInvalidInput();
          } else {
            switch (args[0]) {
              case "--EOL":
                getEOL();
                break;
              case "--cpus":
                getCPUs();
                break;
              case "--homedir":
                getHomeDir();
                break;
              case "--username":
                getUsername();
                break;
              case "--architecture":
                getArchitecture();
                break;
              default:
                handleInvalidInput();
            }
          }
          break;

        // Hash command
        case "hash":
          if (args.length < 1) {
            handleInvalidInput();
          } else {
            await calculateHash(currentDir, args[0]);
          }
          break;

        // Compression commands
        case "compress":
          if (args.length < 2) {
            handleInvalidInput();
          } else {
            await compress(args[0], args[1]);
          }
          break;

        case "decompress":
          if (args.length < 2) {
            handleInvalidInput();
          } else {
            await decompress(args[0], args[1]);
          }
          break;

        default:
          handleInvalidInput();
      }
    } catch (error) {
      handleError(error);
    }

    // Print current directory after each operation
    printCurrentDir(currentDir);
  });
};

start();
