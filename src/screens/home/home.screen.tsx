import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { Button, Text, View } from 'react-native'

import { Icon } from '~features/ui/icon'

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
      <View style={{ backgroundColor: 'yellow' }}>
        <Icon name={'home'} size={50} />
      </View>
      <View style={{ backgroundColor: 'yellow' }}>
        <Icon name={'heart'} size={50} />
      </View>
      <View style={{ backgroundColor: 'yellow' }}>
        <Icon name={'loop'} size={50} />
      </View>
      <View style={{ backgroundColor: 'yellow' }}>
        <Icon name={'pin'} size={50} />
      </View>
      <View style={{ backgroundColor: 'yellow' }}>
        <Icon name={'hamburger'} size={30} />
      </View>
    </View>
  )
})
