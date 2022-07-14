import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconHome: VFC<IconProps> = ({ size = 15, color = 'black', stroke = 5 }) => (
  <Svg width={(61 / 56) * size} height={size} fill="none" preserveAspectRatio="xMinYMin slice" viewBox="0 0 61 56">
    <Path
      d="M13.092 53h9.926a1 1 0 0 0 1-1V38.404a1 1 0 0 1 1-1H36.78a1 1 0 0 1 1 1V52a1 1 0 0 0 1 1h9.926a1 1 0 0 0 1-1V32.9a1 1 0 0 1 1-1h6.678c.89 0 1.337-1.078.707-1.708L31.606 3.707a1 1 0 0 0-1.414 0L3.707 30.192c-.63.63-.184 1.707.707 1.707h6.678a1 1 0 0 1 1 1V52a1 1 0 0 0 1 1Z"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
