import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'

import { RootStackParamList } from '~navigation/index.navigator'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          HomeTab: 'home',
          SearchTab: 'search',
          MapTab: 'map',
          CommunityTab: 'community',
          MoreTab: 'more',
        },
      },
    },
  },
}

export default linking
