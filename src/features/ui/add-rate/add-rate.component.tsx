import { BlurView } from 'expo-blur'
import React, { VFC, useCallback, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Animated, LayoutAnimation, Pressable, Text, TextInput, View } from 'react-native'

import { useAddMarkerRate } from '~features/markers/hooks/use-add-marker-rate'
import { ButtonPrimary, ButtonSecondary } from '~features/ui/button'
import { RatingSlider } from '~features/ui/rating-slider'

import { useStores } from '~hooks/use-store'

import { User } from '~models/user.model'

import useStyles from './add-rate.styles'

interface AddRateProps {
  markerId: string
  onAfterAddRate: () => void
}

export const AddRate: VFC<AddRateProps> = ({ markerId, onAfterAddRate }) => {
  const { t } = useTranslation('add-rate')
  const styles = useStyles(t`add-rate-button`)
  const { global } = useStores()

  const inputRef = useRef<TextInput>(null)

  const [expanded, setExpanded] = useState(false)
  const [rateValue, setRateValue] = useState(2.5)
  const [opinion, setOpinion] = useState('')

  const { mutateAsync, isLoading } = useAddMarkerRate(global.user as User, markerId, {
    rate: rateValue,
    opinion,
    user: (global.user as User).displayName!,
  })

  const changeAnimate = () => {
    if (inputRef.current?.isFocused()) {
      inputRef.current?.blur()
    } else {
      LayoutAnimation.configureNext(
        LayoutAnimation.create(
          100,
          LayoutAnimation.Types.linear,
          LayoutAnimation.Properties.scaleXY,
        ),
      )
      setExpanded(!expanded)
    }
  }

  const sendRate = async () => {
    await mutateAsync()
    onAfterAddRate()
    changeAnimate()
  }

  const Overlay = useCallback(() => {
    return (
      <BlurView intensity={20} style={styles.overlay}>
        <Pressable style={styles.overlay} onPress={changeAnimate} />
      </BlurView>
    )
  }, [expanded])

  return (
    <Animated.View style={[styles.container, !expanded && styles.containerNotExpanded]}>
      <Overlay />
      {!expanded && <ButtonSecondary onPress={changeAnimate}>{t`add-rate-button`}</ButtonSecondary>}
      {expanded && (
        <View style={styles.innerContainer}>
          <View style={styles.topLine}>
            <Text style={styles.title}>{t`add-rate-title`}</Text>
            <RatingSlider onChange={setRateValue} value={rateValue} />
          </View>
          <TextInput
            ref={inputRef}
            style={styles.input}
            value={opinion}
            onChangeText={setOpinion}
            placeholder={t`opinion`}
            placeholderTextColor={styles.inputPlaceholder.color}
          />
          <ButtonPrimary onPress={sendRate} disabled={isLoading}>
            Send
          </ButtonPrimary>
        </View>
      )}
      <Overlay />
    </Animated.View>
  )
}
