import type { RsbuildPlugin } from '@rsbuild/core';

export type pluginEjsOptions = {
  foo?: string;
  bar?: boolean;
};

export const pluginEjs = (options: pluginEjsOptions = {}): RsbuildPlugin => ({
  name: 'plugin-example',

  setup() {
    console.log('Hello Rsbuild!', options);
  },
});
