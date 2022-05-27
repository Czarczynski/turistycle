import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CompositeScreenProps } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React from 'react'

import { CommunityScreen } from '~screens/community'
import { HomeScreen } from '~screens/home'
import { MapScreen } from '~screens/map'
import { MoreScreen } from '~screens/more'
import { SearchScreen } from '~screens/search'

import { theme } from '~styles/theme'

import { RootStackParamList } from './index.navigator'

export type RootTabParamList = {
  HomeTab: undefined
  SearchTab: undefined
  MapTab: undefined
  CommunityTab: undefined
  MoreTab: undefined
}

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>

const BottomTab = createBottomTabNavigator<RootTabParamList>()

export default function RootNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.primary,
        tabBarShowLabel: true,
        tabBarStyle: { paddingHorizontal: 8 },
      })}
    >
      <BottomTab.Screen name="HomeTab" component={HomeScreen} />
      <BottomTab.Screen name="SearchTab" component={SearchScreen} />
      <BottomTab.Screen name="MapTab" component={MapScreen} />
      <BottomTab.Screen name="CommunityTab" component={CommunityScreen} />
      <BottomTab.Screen name="MoreTab" component={MoreScreen} />
    </BottomTab.Navigator>
  )
}
