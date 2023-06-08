import React, { VFC, useState } from 'react'
import { Text, TextInput, TextInputProps } from 'react-native'

import styles from './form-input.styles'

interface FormInputProps extends TextInputProps {
  label: string
}

export const FormInput: VFC<FormInputProps> = ({ label, ...props }) => {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <>
      <Text style={[styles.label, isFocused && styles.inputActive]}>{label}</Text>
      <TextInput
        {...props}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={[
          styles.input,
          isFocused && styles.inputActive,
          props.multiline && styles.inputMultiline,
        ]}
      />
    </>
  )
}
