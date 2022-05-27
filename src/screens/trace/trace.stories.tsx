import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { TraceScreen } from './trace.screen'

storiesOf('TraceScreen', module).add('common', () => (
  <TraceScreen title={text('Title', 'Hello Trace')} />
))
