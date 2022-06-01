import React, {useState} from 'react'
import { storiesOf } from '@storybook/react-native'
import {Pressable, Text, View} from 'react-native'

import { Filters } from './filters.component'
import {initialFiltersState} from "~configs/filters";

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
        onClose={() => setModalVisible(false)}
        filters={filters}
        onChange={setFilters}
      />
    </View>
  )
}
storiesOf("Filters", module)
  .addDecorator((getStory) => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>{getStory()}</View>)
  .add("common", () => (
    <ExampleOne />
  ));
