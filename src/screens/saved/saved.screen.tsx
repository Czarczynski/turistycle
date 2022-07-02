import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { Text, View } from 'react-native'

import styles from './saved.styles'

interface SavedScreenProps {
  title?: string
}

export const SavedScreen: VFC<SavedScreenProps> = observer(({ title = 'SavedScreen' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
})
