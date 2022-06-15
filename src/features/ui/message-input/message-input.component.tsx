import { BlurView } from 'expo-blur'
import { rgba } from 'polished'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LayoutAnimation, Pressable, Text, TextInput } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { Icon } from '~features/ui/icon'

import styles from './message-input.styles'

interface MessageInputProps {
  value: string
  onChangeText: (input: string) => void
  onPress: (input: string) => void
  isFocused?: boolean
  onFocusable?: (val: boolean) => void
}

export const MessageInput = React.forwardRef<TextInput, MessageInputProps>(
  ({ onPress, onChangeText, value, isFocused, onFocusable }, ref) => {
    const { t } = useTranslation('message-input')
    const insets = useSafeAreaInsets()

    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    const _onChangeText = (text: string) => {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          100,
          LayoutAnimation.Types.linear,
          LayoutAnimation.Properties.scaleXY,
        ),
      )
      if (isButtonDisabled !== !text.trim()) {
        setIsButtonDisabled(!text.trim())
      }
      onChangeText(text)
    }
    const sendMessage = () => {
      if (isButtonDisabled) {
        onPress('🚲')
      } else {
        onPress(value.trim())
      }
      onChangeText('')
    }

    return (
      <BlurView
        style={[styles.container, !isFocused && { paddingBottom: insets.bottom }]}
        intensity={50}
      >
        <TextInput
          multiline={true}
          onBlur={() => onFocusable?.(false)}
          onFocus={() => onFocusable?.(true)}
          ref={ref}
          style={styles.input}
          value={value}
          placeholderTextColor={rgba(styles.input.color, 0.5)}
          placeholder={t`placeholder`}
          onChangeText={_onChangeText}
        />
        <Pressable style={styles.button} onPress={sendMessage}>
          {!isButtonDisabled && <Icon name={'send'} size={30} color={styles.icon.color} />}
          {isButtonDisabled && <Text style={styles.icon}>🚲</Text>}
        </Pressable>
      </BlurView>
    )
  },
)
