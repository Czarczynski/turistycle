import React from 'react'
import { storiesOf } from '@storybook/react-native'

import { MarkerDetailsScreen } from './marker-details.screen'

storiesOf("MarkerDetailsScreen", module)
  .add("common", () => (
    <MarkerDetailsScreen marker={null!} />
  ));
