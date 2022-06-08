import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { MapLegend } from './map-legend.component'

storiesOf('MapLegend', module)
  .addDecorator((getStory) => (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkgreen',
      }}
    >
      {getStory()}
    </View>
  ))
  .add('common', () => <MapLegend />)
