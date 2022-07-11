import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconLoop: VFC<IconProps> = ({ size = 15, color = 'black', stroke = 5 }) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    preserveAspectRatio="xMinYMin slice"
    viewBox="0 0 51 51"
  >
    <Path
      d="M37.265 37.265 48 48m-5.324-25.162c0 10.956-8.882 19.838-19.838 19.838C11.882 42.676 3 33.794 3 22.838 3 11.882 11.882 3 22.838 3c10.956 0 19.838 8.882 19.838 19.838Z"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
