import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { Button, Text, View } from 'react-native'

import styles from './home.styles'

interface HomeScreenProps {
  title?: string
}

export const HomeScreen: VFC<HomeScreenProps> = observer(({ title = 'HomeScreen' }) => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title={'Go Storybook'} onPress={() => navigation.navigate('Storybook')} />
    </View>
  )
})
