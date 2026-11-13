import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // The port is fixed: saved sign-ins live per address, and Spotify only accepts the registered redirect.
  server: { port: 5178, strictPort: true, host: "127.0.0.1" },
});
