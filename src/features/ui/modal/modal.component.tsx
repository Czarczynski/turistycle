import React, { VFC } from 'react'
import { Animated, Pressable, Modal as RNModal, SafeAreaView, Text, View } from 'react-native'

import { useModalHeight } from '~features/modal/hooks/use-modal-height'
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
  const [flex, gestureResponders, onDismiss] = useModalHeight(onClose)

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
        <SafeAreaView />
        <Pressable onPress={onDismiss} style={styles.dismiss} />
        <Animated.View
          style={[
            styles.container,
            {
              flex: flex,
            },
          ]}
        >
          <View style={styles.modalView}>
            <View style={styles.header} {...gestureResponders} hitSlop={{ top: 50, bottom: 50 }}>
              <View style={styles.closeBtn}>
                <Pressable onPress={onDismiss}>
                  <Icon name={'x'} color={styles.closeIcon.color} size={16} />
                </Pressable>
              </View>
              <Text style={styles.title}>{title}</Text>
              <View style={styles.rightRender}>{hasRightContent && renderRight}</View>
            </View>
            {children}
            <SafeAreaView />
          </View>
        </Animated.View>
      </>
    </RNModal>
  )
}
