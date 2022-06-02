import React, { VFC } from 'react'
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
  onClose: () => void
  filters: CurrentFiltersType
  onChange: (filters: CurrentFiltersType) => void
}

export const Filters: VFC<FiltersProps> = ({ visible, onClose, filters, onChange }) => {
  const { t } = useTranslation('filters')

  return (
    <Modal
      title={'Filter'}
      visible={visible}
      onClose={onClose}
      renderRight={<RenderRight onChange={onChange} />}
    >
      <ScrollView>
        <Text style={styles.label}>{t`trip-distance`}</Text>
        <View style={styles.distanceContainer}>
          <Slider
            distance={filters.distance}
            onChange={(distance) => onChange({ ...filters, distance })}
          />
        </View>
        {allFilters.cardLike.map(({ filter, data }) => (
          <CardList
            data={data}
            label={filter}
            key={filter}
            onItemCheck={(newCheckedList) => {
              onChange({
                ...filters,
                [filter]: newCheckedList,
              })
            }}
            checkedList={filters[filter]}
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
