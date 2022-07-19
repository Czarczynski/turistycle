import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconHamburger: VFC<IconProps> = ({ size = 15, color = 'black', stroke = 5 }) => (
  <Svg width={size} height={size} fill="none" preserveAspectRatio="xMinYMin slice" viewBox="0 0 50 50">
    <Path
      d="M7 12h35M7 24.838h35M7 37h35"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
