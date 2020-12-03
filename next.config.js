// next.config.js
require("dotenv").config();

module.exports = {
  env: {
    BEARER_TOKEN: process.env.BEARER_TOKEN,
  },
  images: {
    domains: ["pbs.twimg.com"],
  },
};
