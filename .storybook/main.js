module.exports = {
  stories: ["../src/stories/index.stories"],
  addons: [{
    name: '@storybook/addon-essentials',
    options: {
      actions: false,
      controls: false,
    }
  }]
};
