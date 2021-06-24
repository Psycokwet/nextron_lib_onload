module.exports = {
  webpack5: false,
  webpack: (config) =>
    Object.assign(config, {
      target: "electron-renderer",
    }),
};
