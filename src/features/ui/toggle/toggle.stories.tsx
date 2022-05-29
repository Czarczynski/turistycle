import { storiesOf } from '@storybook/react-native'
import React, { useState } from 'react'
import { View } from 'react-native'

import { Toggle } from './toggle.component'

const Example = () => {
  const [isEnabled, setIsEnabled] = useState(false)
  return <Toggle onValueChange={() => setIsEnabled(!isEnabled)} value={isEnabled} />
}

storiesOf('Toggle', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <Example />)
