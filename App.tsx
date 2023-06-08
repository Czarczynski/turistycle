import AppLoading from 'expo-app-loading'
import 'expo-dev-client'
import React from 'react'
import {  LogBox, Platform, UIManager } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import Toast from 'react-native-toast-message'
import { QueryClientProvider } from 'react-query'
import 'reflect-metadata'

import Navigation from '~navigation/index.navigator'
import { RootStoreProvider } from '~store/root-context.store'

import { ChatProvider } from '~utils/chat-provider'
import '~utils/i18n'
import { queryClient } from '~utils/react-query'
import { toastConfig } from '~utils/toast'

import useCachedResources from './src/hooks/use-cached-resources'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}
export default function App() {
  const [isLoading, rootStore] = useCachedResources()

  if (isLoading || !rootStore) {
    return <AppLoading />
  } else {
    return (
      <QueryClientProvider client={queryClient}>
        <RootStoreProvider value={rootStore}>
          <ChatProvider>
            <SafeAreaProvider>
                <Navigation />
              <Toast config={toastConfig} />
            </SafeAreaProvider>
          </ChatProvider>
        </RootStoreProvider>
      </QueryClientProvider>
    )
  }
}

LogBox.ignoreLogs(['Non-serializable values were found in the navigation state'])
