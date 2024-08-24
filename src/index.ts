import type { RsbuildPlugin } from '@rsbuild/core';
import type { Options as EjsOptions } from 'ejs';

export type PluginEjsOptions = {
  /**
   * Set the options for EJS.
   * @see https://ejs.co/#docs
   */
  ejsOptions?: EjsOptions;
};

export const PLUGIN_EJS_NAME = 'rsbuild:pug';

export const pluginEjs = (options: PluginEjsOptions = {}): RsbuildPlugin => ({
  name: PLUGIN_EJS_NAME,

  async setup(api) {
    const VUE_SFC_REGEXP = /\.vue$/;

    api.transform({ test: /\.ejs$/ }, async ({ code, resourcePath }) => {
      const ejsOptions: EjsOptions = {
        filename: resourcePath,
        ...options.ejsOptions,
      };

      // Compile EJS to HTML for Vue compiler
      if (VUE_SFC_REGEXP.test(resourcePath)) {
        const { compile } = await import('ejs');
        const template = compile(code, ejsOptions);
        return template();
      }

      return `
const ejs = require('${require.resolve('ejs')}');
const ejsOptions = ${JSON.stringify(ejsOptions)};

export default function template(templateParams) {
	const fn = ejs.compile(\`${code}\`, ejsOptions);
	return fn(templateParams);
};
`;
    });
  },
});
