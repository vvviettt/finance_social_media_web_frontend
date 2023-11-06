import typescript from "@rollup/plugin-typescript";
import { getFiles } from "./scripts/getFiles.js";
export default {
  input: getFiles("./src"),
  output: {
    dir: "dist",
    format: "esm",
    preserveModules: true,
    preserveModulesRoot: "src",
    sourcemap: true,
  },
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: true,
      declarationDir: "dist",
    }),
  ],
};
