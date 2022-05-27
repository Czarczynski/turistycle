import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { MoreScreen } from './more.screen'

storiesOf('MoreScreen', module).add('common', () => (
  <MoreScreen title={text('Title', 'Hello More')} />
))
