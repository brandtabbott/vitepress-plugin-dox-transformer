import { execSync } from "child_process";
import { watch } from "chokidar";

/**
 * @typedef {Object} VitepressPluginDoxTransformerOptions
 * @property {string} transformer
 * @property {string} fileGlob
 * @property {string} [fileChangeExtension]
 * @property {string} outputDirectory
 * @property {string} [outputFilesExtension]
 */

const DEFAULT_OPTIONS = {
  transformer: null,
  fileGlob: null,
  fileChangeExtension: ".vue",
  outputDirectory: null,
  outputFilesExtension: ".md",
};

/**
 * @param {VitepressPluginDoxTransformerOptions} options
 */
export default (options) => {
  const config = { ...DEFAULT_OPTIONS, ...options };
  const doxCommand = `dox-transformer -t ${config.transformer} -f "${config.fileGlob}" -o ${config.outputDirectory} -e "${config.outputFilesExtension}"`;

  return {
    name: "vitepress-plugin-dox-transformer",

    // Write transformed files on build
    buildStart() {
      execSync(doxCommand);
    },

    // Write transformed files on file change
    configureServer() {
      const watcher = watch(".", {
        ignoreInitial: true,
      });

      watcher.on("change", (path) => {
        if (path.endsWith(config.fileChangeExtension)) {
          execSync(doxCommand);
        }
      });

      watcher.on("add", (path) => {
        if (path.endsWith(config.fileChangeExtension)) {
          execSync(doxCommand);
        }
      });
    },
  };
};
