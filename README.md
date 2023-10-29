# VitePress Plugin - Dox Transformer

A VitePress plugin for transforming files using the [Dox Transformer](https://github.com/brandtabbott/dox-transformer).

## Features

- Transforms specified files using the [Dox Transformer](https://github.com/brandtabbott/dox-transformer) during VitePress builds.
- Monitors file changes and automatically updates transformed files.

## Installation

Install the plugin via npm:

```bash
npm install vitepress-plugin-dox-transformer --save-dev
```

## Usage

1. Configure your VitePress project.
2. Create a configuration object with the following options:

   - `transformer`: The name of the Dox Transformer to use.
   - `fileGlob`: The glob pattern to match files for transformation.
   - `fileChangeExtension` (optional): The extension of changed files to trigger transformation (default is ".vue").
   - `outputDirectory`: The directory where transformed files will be saved.
   - `outputFilesExtension` (optional): The extension for the transformed files (default is ".md").

3. Import and use the plugin in your VitePress configuration:

```javascript
import VitepressPluginDoxTransformer from 'vitepress-plugin-dox-transformer';

export default defineConfig{
  ...

  vite: {
    plugins: [
      VitepressPluginDoxTransformer({
        transformer: 'my-transformer',
        fileGlob: 'my-files-to-transform/**/*.vue',
        outputDirectory: 'docs',
      }),
    ],
  }
};
```

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.