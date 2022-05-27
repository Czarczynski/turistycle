import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { SearchScreen } from './search.screen'

storiesOf('SearchScreen', module).add('common', () => (
  <SearchScreen title={text('Title', 'Hello Search')} />
))
