import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { TripPreview } from './trip-preview.component'

storiesOf('TripPreview', module)
  .addDecorator((getStory) => (
    <View
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16, width: '50%' }}
    >
      {getStory()}
    </View>
  ))
  .add('common', () => <TripPreview trip={null!} />)
