module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    // required since @skedwards88/word_lists uses
    // the import ... assert { type: "json" } syntax
    "@babel/plugin-syntax-import-assertions",
  ],
};
