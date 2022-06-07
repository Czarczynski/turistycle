import { storiesOf } from '@storybook/react-native'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import { initialFiltersState } from '~features/filters/states/filters.state'

import { Filters } from './filters.component'

const ExampleOne = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [filters, setFilters] = useState(initialFiltersState)
  return (
    <View>
      <Pressable
        style={{ borderWidth: 1, borderColor: 'black', padding: 16 }}
        onPress={() => setModalVisible(true)}
      >
        <Text>Show Modal</Text>
      </Pressable>
      <Filters
        visible={modalVisible}
        onClose={(_filters) => {
          setFilters(_filters)
          setModalVisible(false)
        }}
        filters={filters}
      />
    </View>
  )
}
storiesOf('Filters', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <ExampleOne />)
