import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { View } from 'react-native'

import { Filter } from '~models/filter.model'

import { CardList } from './card-list.component'

const data: { label: string; data: Filter[] } = {
  label: 'Categories',
  data: [
    {
      id: 1,
      title: 'Off Road',
      value: 'offRoad',
      icon: 'off-road',
      backgroundColor: `#ad6644`,
    },
    {
      id: 2,
      title: 'Nature',
      value: 'nature',
      icon: 'nature',
      backgroundColor: `#4a9320`,
    },
    {
      id: 3,
      title: 'Forest',
      value: 'forest',
      icon: 'desert',
      backgroundColor: `#209363`,
    },
    {
      id: 4,
      title: 'City',
      value: 'city',
      icon: 'city',
      backgroundColor: `#bbb`,
    },
  ],
}
storiesOf('CardList', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('common', () => <CardList {...data} />)
