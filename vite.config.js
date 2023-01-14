import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      fileName: "jwp",
      formats: ["es"],
    },
    minify: false,
    outDir: "lib",
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["chalk", "commander", "base-64"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          chalk: "chalk", 
          commander: "commander",
          "base-64": "base64"
        }
      },
    },
  },
});
