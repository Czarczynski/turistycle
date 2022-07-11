import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconPin: VFC<IconProps> = ({ size = 15, color = 'black', stroke = 5 }) => (
  <Svg
    width={(59 / 61) * size}
    height={size}
    fill="none"
    preserveAspectRatio="xMinYMin slice"
    viewBox="0 0 59 61"
  >
    <Path
      d="M37.98 22.584c0 3.461-3.797 6.267-8.48 6.267s-8.48-2.806-8.48-6.267c0-3.461 3.797-6.267 8.48-6.267s8.48 2.806 8.48 6.267Z"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M56 22.192C56 32.792 36.92 58 29.5 58 22.08 58 3 32.792 3 22.192 3 11.592 14.864 3 29.5 3S56 11.593 56 22.192Z"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
