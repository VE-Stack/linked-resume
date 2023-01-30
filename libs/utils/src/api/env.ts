declare global {
  namespace NodeJS {
    interface ProcessEnv {
      VITE_FIREBASE_CONFIG_JSON: string;
      VITE_LINKEDIN_CLIENT_ID: string;
      VITE_LINKEDIN_CLIENT_SECRET: string;
      VITE_CLIENT_PORT: string;
      VITE_SERVER_PORT: string;
    }
  }
}

export const {
  VITE_SERVER_PORT: serverPort,
  VITE_CLIENT_PORT: clientPort,
  VITE_LINKEDIN_CLIENT_ID: linkedinClientId
} = process.env;
