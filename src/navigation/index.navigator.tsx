import { NavigationContainer, NavigatorScreenParams } from '@react-navigation/native'
import {
  StackNavigationProp,
  TransitionPresets,
  createStackNavigator,
} from '@react-navigation/stack'
import { StatusBar } from 'expo-status-bar'
import { observer } from 'mobx-react-lite'
import * as React from 'react'

import AuthNavigator, { AuthStackParamList } from '~navigation/auth.navigator'
import ChatNavigator, { ChatStackParamList } from '~navigation/chat.navigator'
import RootNavigator, { RootTabParamList } from '~navigation/root.navigator'

import { MapRideScreen } from '~screens/map-ride'
import { MapSubmitScreen } from '~screens/map-submit'
import { MarkerDetailsScreen } from '~screens/marker-details'
import { ProfileScreen } from '~screens/profile'
import { TraceScreen } from '~screens/trace'
import { WebViewScreen } from '~screens/web-view'

import { HeaderCard, HeaderDefault } from '~features/ui/navigation-header'

import { useStores } from '~hooks/use-store'
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
  Trace: { tripId: string }
  WebView: undefined
  Storybook: undefined
  MarkerDetails: { markerId: string }
}

export type RootStackNavigationProps = StackNavigationProp<RootStackParamList>

const Stack = createStackNavigator<RootStackParamList>()

export default observer(() => {
  const { global } = useStores()
  return (
    <NavigationContainer linking={linking} theme={DarkTheme}>
      <StatusBar style={'dark'} />
      <Stack.Navigator
        detachInactiveScreens={false}
        initialRouteName={global.user ? 'Root' : 'AuthNavigator'}
        headerMode={'float'}
        screenOptions={{
          headerTransparent: true,
          header: (props) => <HeaderDefault {...props} />,
        }}
      >
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
        <Stack.Screen
          name="Trace"
          component={TraceScreen}
          options={{ header: (props) => <HeaderCard {...props} /> }}
        />
        <Stack.Screen
          name="WebView"
          component={WebViewScreen}
          options={{ headerShown: false, ...TransitionPresets.ModalTransition }}
        />
        <Stack.Screen
          name="MarkerDetails"
          component={MarkerDetailsScreen}
          options={{
            headerShown: false,
            // headerTransparent: false,
            cardStyle: { backgroundColor: 'rgba(0,0,0,0)', opacity: 1 },
            ...TransitionPresets.ModalTransition,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
})
