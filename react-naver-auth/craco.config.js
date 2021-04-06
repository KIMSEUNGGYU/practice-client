const CracoLessPlugin = require('craco-less');
const CracoAlias = require('craco-alias');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#03C75A' },
            javascriptEnabled: true,
          },
        },
      },
    },
    {
      plugin: CracoAlias,
      options: {
        source: 'jsconfig',
        jsConfigPath: 'jsconfig.json',
      },
    },
  ],
};