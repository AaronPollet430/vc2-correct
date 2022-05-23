// craco.config.js
module.exports = {
  style: {
    postOptions: {
      plugins: [require('autoprefixer')],
    },
  },
};
