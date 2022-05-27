import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { RegisterScreen } from './register.screen'

storiesOf('RegisterScreen', module).add('common', () => (
  <RegisterScreen title={text('Title', 'Hello Register')} />
))
