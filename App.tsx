import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { LogBox } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'reflect-metadata'

import Navigation from '~navigation/index.navigator'

import useCachedResources from './src/hooks/use-cached-resources'



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
