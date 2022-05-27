import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { CommunityScreen } from './community.screen'

storiesOf('CommunityScreen', module).add('common', () => (
  <CommunityScreen title={text('Title', 'Hello Community')} />
))
