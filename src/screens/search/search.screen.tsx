import { useNavigation } from '@react-navigation/native'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, Text, View } from 'react-native'

import styles from './search.styles'

interface SearchScreenProps {
  title?: string
}

export const SearchScreen: VFC<SearchScreenProps> = ({ title = 'SearchScreen' }) => {
  const { t } = useTranslation('search')
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Button title={'Navigate Trace'} onPress={() => navigation.navigate('Trace')} />
    </View>
  )
}
