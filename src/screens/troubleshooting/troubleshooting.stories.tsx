import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { TroubleshootingScreen } from './troubleshooting.screen'

storiesOf('TroubleshootingScreen', module).add('common', () => (
  <TroubleshootingScreen title={text('Title', 'Hello Troubleshooting')} />
))
