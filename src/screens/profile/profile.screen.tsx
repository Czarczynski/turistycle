import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { Text, View } from 'react-native'

import styles from './profile.styles'

interface ProfileScreenProps {
  title?: string
}

export const ProfileScreen: VFC<ProfileScreenProps> = observer(({ title = 'ProfileScreen' }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
})
