// Configuration guide: https://rstack.rs/config
import { define } from 'rstack';
import { pluginEjs } from '../src/index.ts';

define.app({
  plugins: [pluginEjs()],
  html: {
    template: './src/index.ejs',
    templateParameters: {
      foo: 'Rsbuild',
    },
  },
});
