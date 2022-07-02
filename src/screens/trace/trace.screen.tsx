import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, Text, View } from 'react-native'

import useNavigation from '~hooks/use-navigation'

import styles from './trace.styles'

interface TraceScreenProps {
  title?: string
}

export const TraceScreen: VFC<TraceScreenProps> = observer(({ title = 'TraceScreen' }) => {
  const { t } = useTranslation('trace')
  const navigation = useNavigation()
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <Pressable onPress={() => navigation.navigate('MapRide')}>
        <Text>Go to MapRide</Text>
      </Pressable>
    </View>
  )
})
