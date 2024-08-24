import { defineConfig } from '@rsbuild/core';
import { pluginEjs } from '../src';

export default defineConfig({
  plugins: [pluginEjs()],
});
