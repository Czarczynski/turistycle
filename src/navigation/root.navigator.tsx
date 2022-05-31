import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { CompositeNavigationProp } from '@react-navigation/native'
// import { CompositeScreenProps} from '@react-navigation/native'
import { StackScreenProps, createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import { CommunityScreen } from '~screens/community'
import { HomeScreen } from '~screens/home'
import { MapScreen } from '~screens/map'
import { MoreScreen } from '~screens/more'
import { SearchScreen } from '~screens/search'

import { HeaderTab } from '~features/ui/navigation-header'

import { theme } from '~styles/theme'

import { RootStackParamList } from './index.navigator'

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

// export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeNavigationProp<
//   BottomTabScreenProps<RootTabParamList, Screen>,
//   StackScreenProps<RootStackParamList>
// >

const BottomTab = createBottomTabNavigator<RootTabParamList>()

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
  <SearchStack.Navigator screenOptions={{ header: (props) => <HeaderTab {...props} /> }}>
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

export default function RootNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="HomeTab" screenOptions={() => ({})}>
      <BottomTab.Screen name="HomeTab" component={Home} />
      <BottomTab.Screen name="SearchTab" component={Search} />
      <BottomTab.Screen name="MapTab" component={Map} />
      <BottomTab.Screen name="CommunityTab" component={Community} />
      <BottomTab.Screen name="MoreTab" component={More} />
    </BottomTab.Navigator>
  )
}
