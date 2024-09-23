import { defineConfig } from "@tanstack/start/config"
import tsConfigPaths from "vite-tsconfig-paths"
import { nodePolyfills } from "vite-plugin-node-polyfills"

export default defineConfig({
  vite: {
    plugins: () => [
      tsConfigPaths({
        projects: ["./tsconfig.json"],
      }),
      // TODO: breaks https://discord.com/channels/719702312431386674/1287699666598760509
      // nodePolyfills({
      //   globals: {
      //     Buffer: true,
      //   },
      // }),
    ],
  },
})
