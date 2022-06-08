import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { TripList } from './trip-list.component'

storiesOf('TripList', module)
  .addDecorator((getStory) => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 100,
      }}
    >
      {getStory()}
    </View>
  ))
  .add('common', () => <TripList trips={null!} refreshing={false} />)
