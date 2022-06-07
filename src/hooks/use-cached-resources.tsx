import * as Font from 'expo-font'
import SplashScreen from 'expo-splash-screen'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { setCustomText } from 'react-native-global-props'

import { firebaseConfig } from '~configs/firebase'
import { setupRootStore } from '~store/root-setup.store'
import { RootStore } from '~store/root.store'

import useIsMount from '~hooks/use-is-mount'
import { TOPOGRAPHY } from '~styles/topography'

import fonts from '../configs/fonts'

type CachedResourcesType = [isLoading: boolean, rootStore: RootStore | undefined]

export default function useCachedResources(): CachedResourcesType {
  const [isLoading, setIsLoading] = useState(false)
  const [resourcesCached, setResourcesCached] = useState(false)
  const [hasFirebaseUser, setHasFirebaseUser] = useState(false)
  const [rootStore, setRootStore] = useState<RootStore | undefined>()
  const isMount = useIsMount()
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      setIsLoading(true)
      initializeApp(firebaseConfig)

      try {
        await SplashScreen?.preventAutoHideAsync()
        await Font.loadAsync(fonts)
        setCustomText({
          style: { ...TOPOGRAPHY.paragraph },
        })
        const store = await setupRootStore()
        setRootStore(store)
        getAuth().onAuthStateChanged((user) => {
          if (user) {
            store.global.setUser(user)
          } else {
            store.global.setUser(user)
          }
          if (!hasFirebaseUser) {
            setHasFirebaseUser(true)
          }
        })

        setResourcesCached(true)
      } catch (e) {
        console.warn(e)
      }
    }

    if (!isMount) {
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      loadResourcesAndDataAsync().then()
    }
    if (resourcesCached && hasFirebaseUser) {
      setIsLoading(false)
      SplashScreen?.hideAsync()
    }
  }, [resourcesCached, hasFirebaseUser])

  return [isLoading, rootStore]
}
