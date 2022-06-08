import React, { VFC } from 'react'

import { Marker } from '~features/ui/marker'

import { Marker as MarkerModel } from '~models/marker.model'

interface MarkerListProps {
  markers: MarkerModel[]
}

export const MarkerList: VFC<MarkerListProps> = ({ markers }) => {
  return (
    <>
      {markers.map((marker) => (
        <Marker key={marker._id.$oid} marker={marker} color={'#84bef5'} />
      ))}
    </>
  )
}
export const MarkerLocalList: VFC<MarkerListProps> = ({ markers }) => {
  return (
    <>
      {markers.map((marker) => (
        <Marker key={marker._id.$oid} marker={marker} color={'#82bf48'} />
      ))}
    </>
  )
}

export const MarkerEdgeList: VFC<MarkerListProps> = ({ markers }) => {
  return (
    <>
      {markers.map((marker) => (
        <Marker key={marker._id.$oid} marker={marker} color={'#e06161'} />
      ))}
    </>
  )
}
