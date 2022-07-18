import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { View } from 'react-native'

import styles from './home.styles'

interface HomeScreenProps {
  title?: string
}

export const HomeScreen: VFC<HomeScreenProps> = observer(({ title = 'HomeScreen' }) => {
  return <View style={styles.container}></View>
})
