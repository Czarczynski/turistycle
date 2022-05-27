import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { LoginScreen } from './login.screen'

storiesOf('LoginScreen', module).add('common', () => (
  <LoginScreen title={text('Title', 'Hello Login')} />
))
