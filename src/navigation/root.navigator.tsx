import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { CommunityScreen } from '~screens/community'
import { HomeScreen } from '~screens/home'
import { MapScreen } from '~screens/map'
import { MoreScreen } from '~screens/more'
import { SearchScreen } from '~screens/search'

import { HeaderSearch, HeaderTab } from '~features/ui/navigation-header'

export type RootTabParamList = {
  HomeTab: HomeTabParamList
  SearchTab: SearchTabParamList
  MapTab: MapTabParamList
  CommunityTab: CommunityTabParamList
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
type CommunityTabParamList = {
  Community: undefined
}
type MoreTabParamList = {
  More: undefined
}

const BottomTab = createBottomTabNavigator<RootTabParamList>()

export default function RootNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="HomeTab">
      <BottomTab.Screen name="HomeTab" component={Home} />
      <BottomTab.Screen name="SearchTab" component={Search} />
      <BottomTab.Screen name="MapTab" component={Map} />
      <BottomTab.Screen name="CommunityTab" component={Community} />
      <BottomTab.Screen name="MoreTab" component={More} />
    </BottomTab.Navigator>
  )
}

const HomeStack = createStackNavigator<HomeTabParamList>()
const SearchStack = createStackNavigator<SearchTabParamList>()
const MapStack = createStackNavigator<MapTabParamList>()
const CommunityStack = createStackNavigator<CommunityTabParamList>()
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
  <MapStack.Navigator screenOptions={{ header: (props) => <HeaderTab {...props} /> }}>
    <MapStack.Screen name={'Map'} component={MapScreen} />
  </MapStack.Navigator>
)
const Community = () => (
  <CommunityStack.Navigator screenOptions={{ header: (props) => <HeaderTab {...props} /> }}>
    <CommunityStack.Screen name={'Community'} component={CommunityScreen} />
  </CommunityStack.Navigator>
)
const More = () => (
  <MoreStack.Navigator screenOptions={{ header: (props) => <HeaderTab {...props} /> }}>
    <MoreStack.Screen name={'More'} component={MoreScreen} />
  </MoreStack.Navigator>
)
