import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native'
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack'
import { TransitionSpec } from '@react-navigation/stack/lib/typescript/src/types'
import { StatusBar } from 'expo-status-bar'
import * as React from 'react'

import AuthNavigator, { AuthStackParamList } from '~navigation/auth.navigator'
import ChatNavigator, { ChatStackParamList } from '~navigation/chat.navigator'
import RootNavigator, { RootTabParamList } from '~navigation/root.navigator'

import { MapRideScreen } from '~screens/map-ride'
import { MapSubmitScreen } from '~screens/map-submit'
import { ProfileScreen } from '~screens/profile'
import { TraceScreen } from '~screens/trace'
import { WebViewScreen } from '~screens/web-view'

import { HeaderDefault } from '~features/ui/navigation-header'

import linking from '~utils/linking'
import { DarkTheme } from '~utils/navigation-theme'

import { Storybook } from '../../storybook-dev'

export type RootStackParamList = {
  Root: NavigatorScreenParams<RootTabParamList>
  ChatNavigator: NavigatorScreenParams<ChatStackParamList>
  AuthNavigator: NavigatorScreenParams<AuthStackParamList>
  Profile: undefined
  MapSubmit: undefined
  MapRide: undefined
  Trace: undefined
  WebView: undefined
  Storybook: undefined
}

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = StackScreenProps<
  RootStackParamList,
  Screen
>

const Stack = createStackNavigator<RootStackParamList>()
const config: TransitionSpec = {
  animation: 'timing',
  config: {
    delay: 0,
    duration: 200,
  },
}
export const transitionSpec: { open: TransitionSpec; close: TransitionSpec } = {
  close: config,
  open: config,
}

export default function Navigation() {
  return (
    <NavigationContainer linking={linking} theme={DarkTheme}>
      <StatusBar style={'dark'} />
      <Stack.Navigator
        initialRouteName={'Root'}
        screenOptions={() => ({
          headerMode: 'float',
          animationEnabled: true,
          transitionSpec: transitionSpec,
          header: (props) => <HeaderDefault {...props} />,
        })}
      >
        <Stack.Group>
          <Stack.Screen name="Storybook" component={Storybook} />
          <Stack.Screen name="Root" component={RootNavigator} options={{ headerShown: false }} />
          <Stack.Screen
            name="ChatNavigator"
            component={ChatNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="AuthNavigator"
            component={AuthNavigator}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="Profile" component={ProfileScreen} />
          <Stack.Screen name="MapSubmit" component={MapSubmitScreen} />
          <Stack.Screen name="MapRide" component={MapRideScreen} />
          <Stack.Screen name="Trace" component={TraceScreen} options={{ title: 'bbbb' }} />
        </Stack.Group>
        <Stack.Group screenOptions={{ presentation: 'modal' }}>
          <Stack.Screen name="WebView" component={WebViewScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
