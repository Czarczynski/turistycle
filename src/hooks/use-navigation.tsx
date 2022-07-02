import { useNavigation } from '@react-navigation/native'

import { RootStackNavigationProps } from '~navigation/index.navigator'

export default () => useNavigation<RootStackNavigationProps>()
