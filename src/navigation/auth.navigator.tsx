import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { createSharedElementStackNavigator } from 'react-navigation-shared-element'

import { LoginScreen } from '~screens/login'
import { RegisterScreen } from '~screens/register'

import { HeaderAuth } from '~features/ui/navigation-header'

export type AuthStackParamList = {
  Login: undefined
  Register: undefined
}
const Stack = createSharedElementStackNavigator<AuthStackParamList>()
export default function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTransparent: true,
        header: (props) => <HeaderAuth {...props} />,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen
        name="Register"
        sharedElementsConfig={() => [
          { id: 'auth.background', animation: 'move' },
          { id: 'auth.bottom', animation: 'fade', resize:'clip',align:'right-top' },
        ]}
        component={RegisterScreen}
        options={{}}
      />
    </Stack.Navigator>
  )
}
