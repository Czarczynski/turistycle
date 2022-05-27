import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { WebViewScreen } from './web-view.screen'

storiesOf('WebViewScreen', module).add('common', () => (
  <WebViewScreen title={text('Title', 'Hello WebView')} />
))
