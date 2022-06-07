import { ResponseType, makeRedirectUri, useAuthRequest, useAutoDiscovery } from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import { GoogleAuthProvider, getAuth, signInWithCredential } from 'firebase/auth'
import { useEffect } from 'react'
import { Platform } from 'react-native'

import { Global } from '~store/global/global.store'

WebBrowser.maybeCompleteAuthSession()

type useAuthType = [() => void]

export const useGoogleLogIn = (global: Global): useAuthType => {
  const useProxy = Platform.select({ web: false, default: true })
  const discovery = useAutoDiscovery('https://accounts.google.com')
  const [, response, promptAsync] = useAuthRequest(
    {
      clientId: '675432498642-vee5n2nr4tl3buf7p1fak758uhbdan1u.apps.googleusercontent.com',
      redirectUri: makeRedirectUri({
        useProxy,
      }),
      usePKCE: false,
      responseType: ResponseType.Token,
      scopes: ['openid', 'profile'],
    },
    discovery,
  )

  useEffect(() => {
    if (response?.type === 'success') {
      const provideCredentials = async (accessToken: string, idToken?: string) => {
        const credentials = GoogleAuthProvider.credential(idToken, accessToken)
        const { user } = await signInWithCredential(getAuth(), credentials)
        await global.logIn(user, await user.getIdToken())
      }

      const { accessToken = '', idToken = '' } = response.authentication!
      // eslint-disable-next-line @typescript-eslint/no-floating-promises
      provideCredentials(accessToken, idToken).then()
    }
  }, [response])

  return [() => promptAsync({ useProxy })]
}
