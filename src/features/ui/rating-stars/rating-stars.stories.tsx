import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { RatingStars } from './rating-stars.component'

storiesOf('RatingStars', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <RatingStars rating={2.5} />)
