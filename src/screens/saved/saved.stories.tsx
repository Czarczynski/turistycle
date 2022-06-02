import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { SavedScreen } from './saved.screen'

storiesOf('CommunityScreen', module).add('common', () => (
  <SavedScreen title={text('Title', 'Hello Saved')} />
))
