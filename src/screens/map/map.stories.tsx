import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { MapScreen } from './map.screen'

storiesOf('MapScreen', module).add('common', () => <MapScreen title={text('Title', 'Hello Map')} />)
