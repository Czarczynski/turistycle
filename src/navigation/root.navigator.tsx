import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { HomeScreen } from '~screens/home'
import { MapScreen } from '~screens/map'
import { MoreScreen } from '~screens/more'
import { SavedScreen } from '~screens/saved'
import { SearchScreen } from '~screens/search'

import { HeaderSearch, HeaderTab } from '~features/ui/navigation-header'
import { TabBarIcon } from '~features/ui/tab-bar-icon'

import { theme } from '~styles/theme'

export type RootTabParamList = {
  HomeTab: HomeTabParamList
  SearchTab: SearchTabParamList
  MapTab: MapTabParamList
  SavedTab: SavedTabParamList
  MoreTab: MoreTabParamList
}

type HomeTabParamList = {
  Home: undefined
}
type SearchTabParamList = {
  Search: undefined
}
type MapTabParamList = {
  Map: undefined
}
type SavedTabParamList = {
  Saved: undefined
}
type MoreTabParamList = {
  More: undefined
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

export default function RootNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      tabBarOptions={{
        activeTintColor: theme.primary,
        showLabel: false,

        style: { paddingHorizontal: 8 },
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={Home}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={route.name} />,
        })}
      />
      <BottomTab.Screen
        name="SearchTab"
        component={Search}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={route.name} />,
        })}
      />
      <BottomTab.Screen
        name="MapTab"
        component={Map}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={route.name} />,
        })}
      />
      <BottomTab.Screen
        name="SavedTab"
        component={Saved}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={route.name} />,
        })}
      />
      <BottomTab.Screen
        name="MoreTab"
        component={More}
        options={({ route }) => ({
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} title={route.name} />,
        })}
      />
    </BottomTab.Navigator>
  )
}

const HomeStack = createStackNavigator<HomeTabParamList>()
const SearchStack = createStackNavigator<SearchTabParamList>()
const MapStack = createStackNavigator<MapTabParamList>()
const SavedStack = createStackNavigator<SavedTabParamList>()
const MoreStack = createStackNavigator<MoreTabParamList>()

const Home = () => (
  <HomeStack.Navigator screenOptions={{ header: (props) => <HeaderTab {...props} /> }}>
    <HomeStack.Screen name={'Home'} component={HomeScreen} />
  </HomeStack.Navigator>
)
const Search = () => (
  <SearchStack.Navigator screenOptions={{ header: (props) => <HeaderSearch {...props} /> }}>
    <SearchStack.Screen name={'Search'} component={SearchScreen} />
  </SearchStack.Navigator>
)
const Map = () => (
  <MapStack.Navigator screenOptions={{ headerShown: false }}>
    <MapStack.Screen name={'Map'} component={MapScreen} />
  </MapStack.Navigator>
)
const Saved = () => (
  <SavedStack.Navigator screenOptions={{ header: (props) => <HeaderTab {...props} /> }}>
    <SavedStack.Screen name={'Saved'} component={SavedScreen} />
  </SavedStack.Navigator>
)
const More = () => (
  <MoreStack.Navigator screenOptions={{ header: (props) => <HeaderTab {...props} /> }}>
    <MoreStack.Screen name={'More'} component={MoreScreen} />
  </MoreStack.Navigator>
)
