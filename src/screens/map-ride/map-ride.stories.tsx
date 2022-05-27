import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'

import { MapRideScreen } from './map-ride.screen'

storiesOf('MapRideScreen', module).add('common', () => (
  <MapRideScreen title={text('Title', 'Hello MapRide')} />
))
