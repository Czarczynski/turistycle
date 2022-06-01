import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { LoginScreen } from '~screens/login'
import { RegisterScreen } from '~screens/register'

import { HeaderAuth } from '~features/ui/navigation-header'

export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}
const Stack = createStackNavigator<AuthStackParamList>()
export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      headerMode={'float'}
      screenOptions={{
        headerTransparent: true,
        header: (props) => <HeaderAuth {...props} />,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  )
}
