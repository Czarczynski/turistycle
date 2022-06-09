import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { MarkerDetailsScreen } from './marker-details.screen'

storiesOf('MarkerDetailsScreen', module).add('common', () => <MarkerDetailsScreen marker={null!} />)
