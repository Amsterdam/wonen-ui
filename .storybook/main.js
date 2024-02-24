module.exports = {
  stories: ["../src/stories/*.stories.@(tsx|mdx)"],

  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      actions: false,
      controls: true,
    }
  }, "@storybook/addon-webpack5-compiler-babel"],

  framework: {
    name: "@storybook/react-webpack5",
    options: {}
  },

  docs: {
    autodocs: true
  }
};
