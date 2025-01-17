import type { StorybookConfig } from "@storybook/react-webpack5";

import { join, dirname } from "path";

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, "package.json")));
}
const config: StorybookConfig = {
  stories: [
    {
      directory: '../stories',
      titlePrefix: 'Design System',
      files: '*.stories.*',
    },
  ],

  addons: [
    getAbsolutePath("@storybook/addon-webpack5-compiler-swc"),
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-styling-webpack")
  ],

  framework: {
    name: getAbsolutePath("@storybook/react-webpack5"),
    options: {},
  },

  core: {
    disableWhatsNewNotifications: true
  },
  
  
};
export default config;
