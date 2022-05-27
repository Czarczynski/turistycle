import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { icons } from '~features/ui/icon/icon.types'

import { Icon } from './icon.component'

storiesOf('Icon', module)
  .addDecorator((getStory) => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
      }}
    >
      {getStory()}
    </View>
  ))
  .add('common', () => (
    <View style={styles.wrapper}>
      {Object.keys(icons).map((iconName, key) => (
        <View key={key} style={styles.iconWrapper}>
          <Icon name={iconName as keyof typeof icons} size={iconName === 'play' ? 32 : undefined} />
          <Text>{iconName}</Text>
        </View>
      ))}
    </View>
  ))

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconWrapper: {
    margin: 10,
    alignItems: 'center',
  },
})
