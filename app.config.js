import 'dotenv/config'

const IS_DEV = process.env.APP_VARIANT === 'development'

export default {
  expo: {
    name: IS_DEV ? 'Turistycle [Dev]' : 'Turistycle',
    slug: 'turistycle',
    version: '1.0.0',
    orientation: 'portrait',
    icon: `./assets/images/icon${IS_DEV ? '.dev' : ''}.png`,
    scheme: 'com.turistycle.app',
    userInterfaceStyle: 'automatic',
    splash: {
      image: './assets/images/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      googleServicesFile: IS_DEV
        ? './variants/dev/GoogleService-Info.plist'
        : './variants/prod/GoogleService-Info.plist',
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? 'turistycle.mobileapp' : 'com.turistycle.app',
      config: {
        googleSignIn: {
          reservedClientId:
            'com.googleusercontent.apps.675432498642-91i5clnk0ibn5fmkckb7q2qiuafdh89t',
        },
      },
    },
    android: {
      package: IS_DEV ? 'com.turistycle' : 'com.turistycle.app',
      googleServicesFile: IS_DEV
        ? './variants/dev/google-services.json'
        : './variants/prod/google-services.json',
      adaptiveIcon: {
        foregroundImage: `./assets/images/adaptive-icon${IS_DEV ? '.dev' : ''}.png`,
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/images/favicon.png',
    },
  },
}
