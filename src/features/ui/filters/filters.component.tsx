import React, { VFC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { allFilters, initialFiltersState } from '~features/filters/states/filters.state'
import { CurrentFiltersType } from '~features/filters/types/current-filters.type'
import { CardList } from '~features/ui/card-list'
import { Modal } from '~features/ui/modal'
import { Slider } from '~features/ui/slider'

import styles from './filters.styles'

interface FiltersProps {
  visible: boolean
  onClose: (_filters: CurrentFiltersType) => void
  filters: CurrentFiltersType
}

export const Filters: VFC<FiltersProps> = ({ onClose, filters, visible }) => {
  const { t } = useTranslation('filters')

  const [_filters, _setFilters] = useState<CurrentFiltersType>(
    JSON.parse(JSON.stringify(filters)) as CurrentFiltersType,
  )
  return (
    <Modal
      title={'Filter'}
      visible={visible}
      onClose={() => onClose(_filters)}
      renderRight={<RenderRight onChange={_setFilters} />}
    >
      <ScrollView>
        <Text style={styles.label}>{t`trip-distance`}</Text>
        <View style={styles.distanceContainer}>
          <Slider
            distance={_filters.distance}
            onChange={(distance) => _setFilters({ ..._filters, distance })}
          />
        </View>
        {allFilters.cardLike.map(({ filter, data }) => (
          <CardList
            data={data}
            label={filter}
            key={filter}
            onItemCheck={(newCheckedList) => {
              _setFilters({
                ..._filters,
                [filter]: newCheckedList,
              })
            }}
            checkedList={_filters[filter]}
          />
        ))}
      </ScrollView>
    </Modal>
  )
}

const RenderRight = ({ onChange }: { onChange: (filters: CurrentFiltersType) => void }) => {
  return (
    <Pressable onPress={() => onChange(initialFiltersState)}>
      <Text>Clear</Text>
    </Pressable>
  )
}
