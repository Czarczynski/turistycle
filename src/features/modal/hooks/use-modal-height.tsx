import * as Haptics from 'expo-haptics'
import { ImpactFeedbackStyle } from 'expo-haptics'
import { useEffect, useMemo, useState } from 'react'
import { GestureResponderHandlers, LayoutAnimation, PanResponder } from 'react-native'

import useIsMount from '~hooks/use-is-mount'

type useModalHeightType = [number, GestureResponderHandlers, () => void]

export const useModalHeight = (onClose: () => void): useModalHeightType => {
  const [heightAnimValue, setHeightAnimValue] = useState(false)
  const [moveUsed, setMoveUsed] = useState(false)
  const isMount = useIsMount()

  useEffect(() => {
    if (!isMount) {
      return
    }
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    Haptics.impactAsync(ImpactFeedbackStyle.Light)
  })

  const onDismiss = () => {
    onClose()
    setHeightAnimValue(false)
  }

  const gestureResponders = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => {
          setMoveUsed(false)
        },
        onPanResponderMove: (e, gestureState) => {
          if (gestureState.dy < -40 && !heightAnimValue) {
            LayoutAnimation.configureNext(LayoutAnimation.create(100, LayoutAnimation.Types.linear))
            setHeightAnimValue(true)
          }
          if (gestureState.dy > 40 && heightAnimValue) {
            LayoutAnimation.configureNext(LayoutAnimation.create(100, LayoutAnimation.Types.linear))
            setHeightAnimValue(false)
            setMoveUsed(true)
          }
        },
        onPanResponderRelease: (e, gestureState) => {
          if (gestureState.dy > 40 && !heightAnimValue && !moveUsed) {
            onDismiss()
          }
        },
      }),
    [heightAnimValue, moveUsed],
  )

  return [heightAnimValue ? 4 : 1, gestureResponders.panHandlers, onDismiss]
}
