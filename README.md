# rsbuild-plugin-ejs

An Rsbuild plugin to provide support for the [EJS](https://github.com/mde/ejs) template engine.

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

### Using EJS Templates

After the plugin registration is completed, Rsbuild will automatically parse template files with the `.ejs` extension and compile them using the EJS template engine.

For example, first create a `src/index.ejs` file, and point to that file using `html.template`:

```ts title="rsbuild.config.ts"
export default {
  html: {
    template: "./src/index.ejs",
  },
};
```

Then, you can use EJS syntax in the `index.ejs` template:

```html
<!-- Input -->
Hello <%= foo %>!

<!-- Output -->
Hello Rsbuild!
```

Refer to the [EJS documentation](https://github.com/mde/ejs) for more details.

## Options

### ejsOptions

Used to set the compilation options for EJS. For detailed options, please refer to the [EJS API Reference](https://ejs.co/#docs).

- **Type:** `import('ejs').Options`
- **Default:**

```ts
const defaultOptions = {
  filename,
};
```

- **Example:**

```ts
pluginEjs({
  ejsOptions: {
    delimiter: "|",
  },
});
```

## License

[MIT](./LICENSE).
