import os from "os";

export const getEOL = () => {
  console.log("End-Of-Line: ", JSON.stringify(os.EOL));
};

export const getCPUs = () => {
  os.cpus().forEach((cpu) => {
    console.log(`Model: ${cpu.model}`, `Speed: ${cpu.speed} GHz`);
  });
};

export const getHomeDir = () => {
  console.log("Home Directory: ", os.homedir());
};

export const getUsername = () => {
  console.log("Username: ", os.userInfo().username);
};

export const getArchitecture = () => {
  console.log("Architecture: ", os.arch());
};
