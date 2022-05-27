import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { MapSubmitScreen } from './map-submit.screen'

storiesOf('MapSubmitScreen', module).add('common', () => (
  <MapSubmitScreen title={text('Title', 'Hello MapSubmit')} />
))
