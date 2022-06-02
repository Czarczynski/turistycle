import { storiesOf } from '@storybook/react-native'
import React, { useState } from 'react'
import { View } from 'react-native'

import { initialFiltersState } from '~features/filters/states/filters.state'

import { Slider } from './slider.component'

const Example = () => {
  const [distance, setDistance] = useState(initialFiltersState.distance)
  return <Slider distance={distance} onChange={setDistance} />
}
storiesOf('Slider', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <Example />)
