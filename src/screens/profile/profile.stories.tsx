import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { ProfileScreen } from './profile.screen'

storiesOf('ProfileScreen', module).add('common', () => (
  <ProfileScreen title={text('Title', 'Hello Profile')} />
))
