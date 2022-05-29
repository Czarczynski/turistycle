import * as React from 'react'
import { VFC } from 'react'
import Svg, { Path } from 'react-native-svg'

interface IconHalfStarLeftProps {
  size?: number
  stroke?: number
  color?: string
}
export const IconHalfStarLeft:VFC<IconHalfStarLeftProps> =  ({size=15,color,stroke}) => (
  <Svg
    viewBox="-30 -50 1182.437 2313.252"
    width={size || 1182.437}
    height={(size || 1182.437) * 1.88022871409}
    strokeWidth={stroke}
    >
    <Path
      data-name="Path 466"
      d="M1182.435.5s-36.886.029-47.881 36.352c-6.1 17.4-238.278 664.286-260.759 726.736-13.22 26.291-37.935 29.728-45.753 29.44-35.061 1-748.231 18.75-783.653 20-37.6 2.085-62.8 57.354-25.5 87.314 40.432 30.467 589.171 444.97 619.561 467.877 25.592 21.3 19.718 45.557 18.823 51.559-5.929 19.333-214.177 710.754-223.909 743.3-8.648 41.622 36.83 75.905 75.416 51.54 36.32-25.642 627.305-425.008 642.707-435.527a51.811 51.811 0 0 1 30.729-10.437"
      fill={color || 'transparent'}
      stroke={'gold'}
    />
  </Svg>
);
