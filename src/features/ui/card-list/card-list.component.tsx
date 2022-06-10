import _ from 'lodash'
import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import { FlatList, Text, View } from 'react-native'

import { Card } from '~features/ui/card'

import { Filter } from '~models/filter.model'

import styles from './card-list.styles'

interface CardListProps {
  label?: string
  data: Filter[]
  onItemCheck?: (list: string[]) => void
  checkedList: string[]
}

export const CardList: VFC<CardListProps> = ({ label, data, onItemCheck, checkedList }) => {
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
            key={item.id}
            onPress={() => onItemCheck?.(_.xor(checkedList, [item.value]))}
            checked={checkedList.includes(item.value)}
            title={item.value}
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
