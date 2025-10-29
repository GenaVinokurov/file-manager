# File Manager

CLI File Manager built with Node.js

## Project Structure

```
file-manager/
├── index.js                    # Main entry point, CLI interface
├── package.json
├── README.md
└── src/
    ├── navigation.js           # Navigation commands: up, cd, ls
    ├── files.js                # File operations: cat, add, rm, rn, cp, mv, mkdir
    ├── system.js               # OS info commands: os --EOL, --cpus, etc.
    ├── hash.js                 # Hash calculation
    ├── compression.js          # Compress/decompress commands
    └── utils.js                # Helper utilities
```

## Installation

```bash
npm install
```

## Usage

Start the file manager with your username:

```bash
npm run start -- --username=your_username
```

## Available Commands

### Navigation

- `up` - Go up one directory level
- `cd path_to_directory` - Change directory
- `ls` - List directory contents

### File Operations

- `cat path_to_file` - Read file contents
- `add new_file_name` - Create empty file
- `mkdir new_directory_name` - Create new directory
- `rn path_to_file new_filename` - Rename file
- `cp path_to_file path_to_new_directory` - Copy file
- `mv path_to_file path_to_new_directory` - Move file
- `rm path_to_file` - Delete file

### System Information

- `os --EOL` - Get system End-Of-Line
- `os --cpus` - Get CPU information
- `os --homedir` - Get home directory
- `os --username` - Get system username
- `os --architecture` - Get CPU architecture

### Other Operations

- `hash path_to_file` - Calculate file hash
- `compress path_to_file path_to_destination` - Compress file (Brotli)
- `decompress path_to_file path_to_destination` - Decompress file (Brotli)
- `.exit` - Exit the program

## Implementation Status

### ✅ Completed

- Project structure
- CLI interface skeleton
- Command routing
- Module structure

### 🚧 To Implement

- [ ] Navigation commands (up, cd, ls)
- [ ] File operations (cat, add, mkdir, rn, cp, mv, rm)
- [ ] OS information commands
- [ ] Hash calculation
- [ ] Compression/decompression

## Development Notes

Each module in `src/` contains functions with JSDoc comments and TODO markers.
Implement functions step by step, test each command before moving to the next.

## Requirements

- Node.js 24.x.x (24.14.0 or higher)
- No external dependencies (only built-in Node.js modules)
