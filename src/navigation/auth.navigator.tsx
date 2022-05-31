import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { LoginScreen } from '~screens/login'
import { RegisterScreen } from '~screens/register'

import { RootStackParamList } from './index.navigator'

export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}

// export type AuthStackScreenProps<Screen extends keyof AuthStackParamList> = CompositeScreenProps<
//   NativeStackScreenProps<AuthStackParamList, Screen>,
//   NativeStackScreenProps<RootStackParamList>
// >

const Stack = createStackNavigator<AuthStackParamList>()
export default function Navigation() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}
