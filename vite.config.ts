import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const isDeployment = process.env.IS_GITHUB_ACTION === "yes";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isDeployment ? "/fajn-widget/" : "/",
  build: {
    outDir: "build",
  },
});
