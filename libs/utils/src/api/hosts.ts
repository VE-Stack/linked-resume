import { clientPort, serverPort } from "./env";

export const hosts = {
  linkedin: "https://www.linkedin.com/oauth/v2",
  github: "",
  frontend: `http://localhost:${clientPort}`,
  backend: `http://localhost:${serverPort}`
};
