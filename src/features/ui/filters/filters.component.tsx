import React, { VFC } from 'react'
import { useTranslation } from 'react-i18next'
import {ScrollView, Text, View} from 'react-native'

import { allFilters } from '~configs/filters'

import { CardList } from '~features/ui/card-list'
import { Modal } from '~features/ui/modal'
import { Slider } from '~features/ui/slider'

import styles from './filters.styles'

interface FiltersProps {
  visible: boolean
  onClose: () => void
  filters: any
  onChange: (filters: any) => void
}

export const Filters: VFC<FiltersProps> = ({ visible, onClose, filters, onChange }) => {
  const { t } = useTranslation('filters')

  return (
    <Modal title={'Filter'} visible={visible} onClose={onClose}>
      <ScrollView>
        <Text style={styles.label}>{t`trip-distance`}</Text>
        <View style={styles.distanceContainer}>
          <Slider
            distance={filters.distance}
            onChange={(distance) => onChange({ ...filters, distance })}
          />
        </View>
        {allFilters.cardLike.map((item) => (
          <CardList key={item.filter} {...item} />
        ))}
      </ScrollView>
    </Modal>
  )
}
