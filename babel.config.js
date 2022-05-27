module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            '~assets': ['./assets'],
            '~features': ['./src/features'],
            '~configs': ['./src/configs'],
            '~styles': ['./src/styles'],
            '~screens': ['./src/screens'],
            '~models': ['./src/models'],
            '~hooks': ['./src/hooks'],
            '~utils': ['./src/utils'],
            '~navigation': ['./src/navigation'],
          },
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      ],
    ],
  }
};
