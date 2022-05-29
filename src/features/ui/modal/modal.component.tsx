import React, { VFC, useRef, useState } from 'react'
import { Animated, Easing, Pressable, Modal as RNModal, Text, View } from 'react-native'

import { Icon } from '~features/ui/icon'

import styles from './modal.styles'

interface ModalProps {
  title: string
  visible: boolean
  onClose: () => void
  children?: React.ReactElement
  renderRight?: React.ReactElement
}

export const Modal: VFC<ModalProps> = ({ title, visible, onClose, children, renderRight }) => {
  const hasRightContent = Boolean(renderRight)

  const [heightAnimValue, setHeightAnimValue] = useState(0)

  const heightAnim = useRef(new Animated.Value(0)).current
  const onDismiss = () => {
    onClose()
    setHeightAnimValue(0)
    heightAnim.setValue(0)
  }

  const changedHeight = () => {
    if (heightAnimValue) {
      Animated.timing(heightAnim, {
        toValue: 0,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
      setHeightAnimValue(0)
    } else {
      Animated.timing(heightAnim, {
        toValue: 1,
        duration: 200,
        easing: Easing.linear,
        useNativeDriver: true,
      }).start()
      setHeightAnimValue(1)
    }
  }
  return (
    <RNModal
      animationType="slide"
      transparent={true}
      collapsable
      visible={visible}
      presentationStyle={'overFullScreen'}
      onRequestClose={onDismiss}
    >
      <>
        <Pressable onPress={onDismiss} style={styles.dismiss} />
        <Animated.View
          style={[
            styles.container,
            {
              height: '80%',
              transform: [
                {
                  translateY: heightAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [300, 0], // 0 : 150, 0.5 : 75, 1 : 0
                  }),
                },
              ],
            },
          ]}
        >
          <View style={styles.modalView}>
            <View style={styles.header}>
              <Pressable onPress={onDismiss} style={styles.closeBtn}>
                <Icon name={'x'} color={styles.closeIcon.color} size={16} />
              </Pressable>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.rightRender}>{hasRightContent && renderRight}</View>
            </View>
            <Pressable onPress={changedHeight}>
              <Text>AAA: {heightAnimValue}</Text>
            </Pressable>
            {children}
          </View>
        </Animated.View>
      </>
    </RNModal>
  )
}
