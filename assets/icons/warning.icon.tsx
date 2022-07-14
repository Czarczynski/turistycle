import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconWarning: VFC<IconProps> = ({ size = 15, color = 'black', stroke = 5 }) => (
  <Svg width={(56/55) * size} height={size} fill="none" preserveAspectRatio="xMinYMin slice" viewBox="0 0 56 55">
    <Path
      d="M28.013 11.5V33m0 8.5v1m25-15c0 13.807-11.192 25-25 25-13.807 0-25-11.193-25-25s11.193-25 25-25c13.808 0 25 11.193 25 25Z"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
