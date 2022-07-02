import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Image, Pressable, Text, View } from 'react-native'

import { User } from '~models/user.model'

import styles from './user-row.styles'

interface UserRowProps {
  user: User
  onPress: () => void
}

export const UserRow: VFC<UserRowProps> = ({ user, onPress }) => {
  const { t } = useTranslation('user-row')

  return (
    <Pressable style={styles.container} onPress={onPress}>
      {Boolean(user.photoURL) && <Image style={styles.image} source={{ uri: user.photoURL! }} />}
      {Boolean(!user.photoURL) && (
        <View style={styles.imagePlaceholder}>
          <Text style={styles.letter}>{user.displayName?.[0] ?? 'U'}</Text>
        </View>
      )}
      <Text style={styles.text}>{user.displayName ?? 'Unknown'}</Text>
    </Pressable>
  )
}
