import { expect, test } from '@rstest/playwright';
import { createRsbuild } from '@rsbuild/core';
import { pluginEjs } from '../../dist';

test('should allow to use .ejs template file', async ({ page }) => {
  const rsbuild = await createRsbuild({
    cwd: import.meta.dirname,
    rsbuildConfig: {
      plugins: [pluginEjs()],
      html: {
        template: './src/index.ejs',
        templateParameters: {
          foo: 'Rsbuild',
        },
      },
    },
  });

  await rsbuild.build();
  const { server, urls } = await rsbuild.preview();

  await page.goto(urls[0]);
  const testEjs = page.locator('#test');
  await expect(testEjs).toHaveText('Hello Rsbuild!');

  await server.close();
});
