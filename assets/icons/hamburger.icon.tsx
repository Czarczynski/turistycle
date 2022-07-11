import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconHamburger: VFC<IconProps> = ({ size = 15, color = 'black', stroke = 5 }) => (
  <Svg width={(66/55) * size} height={size} fill="none" preserveAspectRatio="xMinYMin slice" viewBox="0 0 66 55">
    <Path
      d="M3 7h59M3 26h59M3 44h59"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
