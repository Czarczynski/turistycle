import * as Font from 'expo-font'
import SplashScreen from 'expo-splash-screen'
import { useEffect, useState } from 'react'
import { setCustomText } from 'react-native-global-props'

import { setupRootStore } from '~store/root-setup.store'
import { RootStore } from '~store/root.store'

import { TOPOGRAPHY } from '~styles/topography'

import fonts from '../configs/fonts'

export default function useCachedResources(): [
  isLoading: boolean,
  rootStore: RootStore | undefined,
] {
  const [isLoading, setIsLoading] = useState(false)
  const [rootStore, setRootStore] = useState<RootStore | undefined>()

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      setIsLoading(true)

      try {
        await SplashScreen?.preventAutoHideAsync()

        await Font.loadAsync(fonts)
        setCustomText({
          style: { ...TOPOGRAPHY.paragraph },
        })
        const store = await setupRootStore()
        setRootStore(store)
        setIsLoading(false)

        await SplashScreen?.hideAsync()
      } catch (e) {
        console.warn(e)
      }
    }

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadResourcesAndDataAsync().then()
  }, [])

  return [isLoading, rootStore]
}
