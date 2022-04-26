// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `
        @import '~@/assets/scss/vendors/smart-grid.scss';
        @import '~@/assets/scss/base/reset.scss';
        @import '~@/assets/scss/abstracts/mixins.scss';
        @import "~@/assets/scss/abstracts/variables.scss";
      `,
      },
    },
  },
};
