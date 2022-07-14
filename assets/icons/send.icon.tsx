import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconSend: VFC<IconProps> = ({ size = 15, color = 'black' }) => (
  <Svg width={size} height={size} fill="none" preserveAspectRatio="xMinYMin slice" viewBox="0 0 50 50">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 25c0 13.807 11.193 25 25 25s25-11.193 25-25S38.807 0 25 0 0 11.193 0 25Zm24.939-11.544a2.5 2.5 0 1 0-2.878 4.088l7.042 4.956H13a2.5 2.5 0 0 0 0 5h15.743l-6.63 4.42a2.5 2.5 0 1 0 2.774 4.16l13.5-9a2.5 2.5 0 0 0 .052-4.124l-13.5-9.5Z"
      fill={color}
    />
  </Svg>
)
