import { pluginEjs } from '../../dist';

export default {
  plugins: [pluginEjs()],
  html: {
    template: './src/index.ejs',
    templateParameters: {
      foo: 'Rsbuild',
    },
  },
};
