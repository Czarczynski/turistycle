import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconHeart: VFC<IconProps> = ({ size = 15, color = 'black', stroke = 5 }) => (
  <Svg
    width={(54 / 50) * size}
    height={size}
    fill="none"
    preserveAspectRatio="xMinYMin slice"
    viewBox="0 0 54 50"
  >
    <Path
      d="M14.75 4C8.26 4 3 10.119 3 17.667 3 31.88 26.5 45 26.5 45S50 31.88 50 17.667C50 10.119 44.74 4 38.25 4S26.5 9.46 26.5 14.211C26.5 9.459 21.24 4 14.75 4Z"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
