import React, { VFC } from 'react'
import { Marker as RNMarker } from 'react-native-maps'

import { MarkerCallout } from '~features/ui/marker-callout'

import { Marker as MarkerModel } from '~models/marker.model'

interface MarkerProps {
  marker: MarkerModel
  color?: string
}

export const Marker: VFC<MarkerProps> = ({ marker, color }) => {
  return (
    <RNMarker
      coordinate={{ longitude: marker.longitude, latitude: marker.latitude }}
      title={marker.name}
      pinColor={color ?? 'yellow'}
    >
      <MarkerCallout marker={marker} />
    </RNMarker>
  )
}
