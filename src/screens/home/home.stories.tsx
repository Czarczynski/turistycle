import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { HomeScreen } from './home.screen'

storiesOf('HomeScreen', module).add('common', () => (
  <HomeScreen title={text('Title', 'Hello Home')} />
))
