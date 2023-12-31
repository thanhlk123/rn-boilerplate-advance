module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@env': './env-config',
          '@assets': './src/app/assets',
          '@common': './src/app/common',
          '@app-emitter': './src/app/common/emitter',
          '@app-firebase': './src/app/common/firebase',
          '@hooks': './src/app/common/hooks',
          '@validate': './src/app/common/zod-validate',
          '@listener': './src/app/common/redux/listener.ts',
          '@animated': './src/app/common/animated',
          '@screens': './src/app/screens',
          '@components': './src/app/library/components',
          '@networking': './src/app/library/networking',
          '@utils': './src/app/library/utils',
          '@storage': './src/app/library/utils/storage',
          '@model': './src/app/model',
          '@navigation': './src/app/navigation',
          '@store': './src/app/redux/store',
          '@redux-slice': './src/app/redux/action-slice',
          '@redux-selector': './src/app/redux/selector',
          '@redux-action-type': './src/app/redux/action-type',
          '@theme': './src/app/themes',
        },
      },
    ],
  ],
};
