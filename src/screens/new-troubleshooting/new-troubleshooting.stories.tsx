import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { NewTroubleshootingScreen } from './new-troubleshooting.screen'

storiesOf('NewTroubleshootingScreen', module).add('common', () => (
  <NewTroubleshootingScreen title={text('Title', 'Hello NewTroubleshooting')} />
))
