import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React, { useState } from 'react'
import { Pressable, Text, View } from 'react-native'

import { Modal } from './modal.component'

const ExampleOne = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View>
      <Pressable
        style={{ borderWidth: 1, borderColor: 'black', padding: 16 }}
        onPress={() => setModalVisible(true)}
      >
        <Text>Show Modal</Text>
      </Pressable>
      <Modal
        title={'Filters'}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        renderRight={
          <Pressable onPress={() => setModalVisible(false)}>
            <Text>Clear</Text>
          </Pressable>
        }
      >
        <View style={{ alignItems: 'center', justifyContent: 'center', height:300 }}>
          <Text>Some Content in modal</Text>
        </View>
      </Modal>
    </View>
  )
}
storiesOf('Modal', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <ExampleOne />)
