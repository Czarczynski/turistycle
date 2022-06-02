import * as Haptics from 'expo-haptics'
import { ImpactFeedbackStyle } from 'expo-haptics'
import { useCallback, useMemo, useState } from 'react'
import { GestureResponderHandlers, LayoutAnimation, PanResponder } from 'react-native'

type useModalHeightType = [number, GestureResponderHandlers, () => void]

export const useModalHeight = (onClose: () => void): useModalHeightType => {
  const [heightAnimValue, setHeightAnimValue] = useState(false)
  const [moveUsed, setMoveUsed] = useState(false)

  const onDismiss = useCallback(async () => {
    onClose()
    setHeightAnimValue(false)
    await Haptics.impactAsync(ImpactFeedbackStyle.Light)
  }, [onClose])

  const gestureResponders = useMemo(
    () =>
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        // onStartShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => {
          setMoveUsed(false)
        },
        onPanResponderMove: async (e, gestureState) => {
          if (gestureState.dy < -40 && !heightAnimValue) {
            LayoutAnimation.configureNext(LayoutAnimation.create(100, LayoutAnimation.Types.linear))
            setHeightAnimValue(true)
            await Haptics.impactAsync(ImpactFeedbackStyle.Light)
          }
          if (gestureState.dy > 40 && heightAnimValue) {
            LayoutAnimation.configureNext(LayoutAnimation.create(100, LayoutAnimation.Types.linear))
            setHeightAnimValue(false)
            await Haptics.impactAsync(ImpactFeedbackStyle.Light)
            setMoveUsed(true)
          }
        },
        onPanResponderRelease: async (e, gestureState) => {
          if (gestureState.dy > 40 && !heightAnimValue && !moveUsed) {
            await onDismiss()
          }
        },
      }),
    [heightAnimValue, moveUsed, onDismiss],
  )

  return [heightAnimValue ? 50 : 1, gestureResponders.panHandlers, onDismiss]
}
