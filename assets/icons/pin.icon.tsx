import * as React from 'react'
import { VFC } from 'react'
import Svg, { Circle, Path } from 'react-native-svg'

interface IconProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconPin: VFC<IconProps> = ({ size = 15, color = 'black', stroke = 5 }) => (
  <Svg
    width={(45 / 50) * size}
    height={size}
    fill="none"
    preserveAspectRatio="xMinYMin slice"
    viewBox="0 0 45 50"
  >
    <Circle cx={21.956} cy={19.413} r={5.044} stroke={color} strokeWidth={stroke} />
    <Path
      d="M41.583 22.041c0 2.468-.913 5.316-2.538 8.313-1.612 2.97-3.834 5.922-6.224 8.55-2.388 2.625-4.888 4.864-7.008 6.426-1.063.783-1.99 1.365-2.726 1.74-.624.317-.95.4-1.035.422l-.01.003c-.004 0-.007-.002-.01-.003-.086-.021-.412-.105-1.037-.423-.736-.374-1.662-.956-2.725-1.739-2.12-1.561-4.62-3.801-7.009-6.427-2.39-2.627-4.611-5.578-6.223-8.55C3.413 27.358 2.5 24.51 2.5 22.041 2.5 11.25 11.249 2.5 22.041 2.5c10.793 0 19.542 8.749 19.542 19.541Z"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
)
