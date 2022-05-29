import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import icons from '~assets/icons'

import { icons as icomoons } from '~features/ui/icon/icon.types'

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
    <ScrollView contentContainerStyle={styles.wrapper}>
      {Object.keys(icomoons)
        .concat(Object.keys(icons))
        .map((iconName, key) => (
          <View key={key} style={styles.iconWrapper}>
            <Icon name={iconName as keyof typeof icomoons | keyof typeof icons} size={35} />
            <Text>{iconName}</Text>
          </View>
        ))}
    </ScrollView>
  ))

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  iconWrapper: {
    width: '25%',
    marginBottom: 20,
    alignItems: 'center',
  },
})
