import * as Font from 'expo-font'
import SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'

import fonts from '../configs/fonts'

export default function useCachedResources() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      setIsLoading(true)

      try {
        await SplashScreen?.preventAutoHideAsync()

        await Font.loadAsync(fonts)
        setIsLoading(false)

        await SplashScreen?.hideAsync()
      } catch (e) {
        console.warn(e)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadResourcesAndDataAsync()
  }, [])

  return isLoading
}
