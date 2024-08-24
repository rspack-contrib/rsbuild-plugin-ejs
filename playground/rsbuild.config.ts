import { pluginEjs } from '../src';

export default {
  plugins: [pluginEjs()],
  html: {
    template: './src/index.ejs',
    templateParameters: {
      foo: 'Rsbuild',
    },
  },
};
