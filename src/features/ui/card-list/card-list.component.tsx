import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, Text, View } from 'react-native'

import { Card } from '~features/ui/card'

import { Filter } from '~models/filter.model'

import styles from './card-list.styles'

interface CardListProps {
  label?: string
  data: Filter[]
  onItemPress?: (item: Filter) => void
}

export const CardList: VFC<CardListProps> = ({ label, data, onItemPress }) => {
  const { t } = useTranslation('card-list')

  return (
    <View style={styles.container}>
      {label && <Text style={styles.title}>{t(label)}</Text>}
      <FlatList
        contentContainerStyle={styles.contentContainer}
        horizontal
        data={data}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => (
          <Card
            onPress={() => onItemPress?.(item)}
            key={item.id}
            opacity
            title={item.title}
            backgroundColor={item.backgroundColor}
            icon={item.icon}
          />
        )}
      />
    </View>
  )
}

const Separator = () => {
  return <View style={styles.separator} />
}
