import { storiesOf } from '@storybook/react-native'
import React, { useState } from 'react'
import { View } from 'react-native'

import { SearchInput } from './search-input.component'

const Example = () => {
  const [value, setValue] = useState('')
  return <SearchInput onChangeText={setValue} onSubmitEditing={() => null} value={value} />
}
storiesOf('SearchInput', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <Example />)
