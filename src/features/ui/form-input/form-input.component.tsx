import React, { VFC, useState } from 'react'
import { Text, TextInput } from 'react-native'

import styles from './form-input.styles'

interface FormInputProps {
  onChangeText: (text: string) => void
  multiline?: boolean
  label: string
}

export const FormInput: VFC<FormInputProps> = ({ onChangeText, multiline, label }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <>
      <Text style={[styles.label, isFocused && styles.inputActive]}>{label}</Text>
      <TextInput
        multiline={multiline}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[styles.input, isFocused && styles.inputActive, multiline && styles.inputMultiline]}
        onChangeText={onChangeText}
      />
    </>
  )
}
