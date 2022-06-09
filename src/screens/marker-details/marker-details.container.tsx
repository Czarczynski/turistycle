import React from 'react'

import { MarkerDetailsScreen } from './marker-details.screen'

interface MarkerDetailsContainerProps {
  route: {
    params: {
      markerId: string
    }
  }
}

export default function ({ route }: MarkerDetailsContainerProps) {
  return <MarkerDetailsScreen markerId={route.params.markerId} />
}
