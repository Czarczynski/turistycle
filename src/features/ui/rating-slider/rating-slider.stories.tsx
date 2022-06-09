import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { RatingSlider } from './rating-slider.component'

storiesOf('RatingSlider', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <RatingSlider title={text('Title', 'Hello RatingSlider')} />)
