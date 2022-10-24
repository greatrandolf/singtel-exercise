module.exports = (api) => {
  const babelEnv = api.env();
  const plugins = [];
  if (babelEnv !== 'development') {
    plugins.push(['transform-remove-console']);
  }
  // Issue related to https://github.com/software-mansion/react-native-reanimated/issues/1875 
  plugins.push(['react-native-reanimated/plugin']);
  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins,
  };
};