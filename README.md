# rsbuild-plugin-ejs

rsbuild-plugin-ejs is a Rsbuild plugin to do something.

<p>
  <a href="https://npmjs.com/package/rsbuild-plugin-ejs">
   <img src="https://img.shields.io/npm/v/rsbuild-plugin-ejs?style=flat-square&colorA=564341&colorB=EDED91" alt="npm version" />
  </a>
  <img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square&colorA=564341&colorB=EDED91" alt="license" />
</p>

## Usage

Install:

```bash
npm add rsbuild-plugin-ejs -D
```

Add plugin to your `rsbuild.config.ts`:

```ts
// rsbuild.config.ts
import { pluginEjs } from "rsbuild-plugin-ejs";

export default {
  plugins: [pluginEjs()],
};
```

## Options

### foo

Some description.

- Type: `string`
- Default: `undefined`
- Example:

```js
pluginEjs({
  foo: "bar",
});
```

## License

[MIT](./LICENSE).
