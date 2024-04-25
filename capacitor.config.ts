import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "io.ionic.starter",
  appName: "ionic-app-base",
  webDir: "dist",
  server: {
    androidScheme: "https",
    // url: "https://staging.7wrk.com",  //https://10.10.0.2
  },
};

export default config;
