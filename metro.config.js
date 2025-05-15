const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {withNativeWind} = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

module.exports = (async () => {
  // Get the base config
  let config = await getDefaultConfig(__dirname);

  // Extract the resolvers
  const {
    resolver: {sourceExts, assetExts},
  } = config;

  // Add svg support
  config = mergeConfig(config, {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg'],
    },
  });

  // Apply NativeWind
  config = withNativeWind(config, {
    input: './global.css',
  });

  // Apply Reanimated last
  config = wrapWithReanimatedMetroConfig(config);

  return config;
})();
