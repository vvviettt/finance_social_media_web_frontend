import { lstatSync, readFileSync, readdirSync } from "fs";

const extensions = [".ts", "tsx", "js", "jsx", ".css", ".scss"];
const exclude = [".test.ts", ".test.tsx", ".test.js", ".test.jsx"];
export const getFiles = (path) => {
  let files = [];
  const dirs = readdirSync(path);
  dirs.forEach((file) => {
    const entry = `${path}/${file}`;
    if (lstatSync(entry).isDirectory()) {
      files = [...files, ...getFiles(entry)];
    } else {
      if (
        extensions.some((ext) => entry.endsWith(ext)) &&
        !exclude.some((ext) => entry.endsWith(ext))
      ) {
        files = [...files, entry];
      }
    }
  });
  return files;
};
