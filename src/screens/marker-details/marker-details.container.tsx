import React from 'react'

import { Marker } from '~models/marker.model'

import { MarkerDetailsScreen } from './marker-details.screen'

interface MarkerDetailsContainerProps {
  route: {
    params: {
      marker: Marker
    }
  }
}

export default function ({ route }: MarkerDetailsContainerProps) {
  return <MarkerDetailsScreen marker={route.params.marker} />
}
