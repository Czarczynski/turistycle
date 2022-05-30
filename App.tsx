import 'expo-dev-client'
import React from 'react'
import { LogBox, Platform, UIManager } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'reflect-metadata'

import Navigation from '~navigation/index.navigator'

import '~utils/i18n'

import useCachedResources from './src/hooks/use-cached-resources'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}
export default function App() {
  const isLoading = useCachedResources()

  if (isLoading) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    )
  }
}

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])
