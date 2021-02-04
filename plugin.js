const cpy = require('cpy');

module.exports = (snowpackConfig, pluginOptions) => {
  const { patterns = [] } = pluginOptions;

  return {
    name: 'snowpack-plugin-copy',
    async optimize() {
      if (patterns.length > 0) {
        // eslint-disable-next-line no-restricted-syntax
        for (const { source, destination, options } of patterns) {
          // eslint-disable-next-line no-await-in-loop
          await cpy(source, destination, options);
        }
      }
    },
  };
};
