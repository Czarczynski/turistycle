import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Text, View } from 'react-native'

import {
  ButtonFloating,
  ButtonPrimary,
  ButtonPrimaryReversed,
  ButtonSecondary,
  ButtonSecondaryReversed,
  ButtonSocialIcon,
} from '~features/ui/button'
import { Icon } from '~features/ui/icon'

import { Button } from './button.component'

storiesOf('Button', module)
  .addDecorator((getStory) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{getStory()}</View>
  ))
  .add('primary', () => (
    <ButtonPrimary onPress={action('clicked-text')}>
      {({ textStyle, iconColor }) => (
        <>
          <Icon color={iconColor} name={'bell'} />
          <Text style={[textStyle, { paddingLeft: 12 }]}>More Details</Text>
        </>
      )}
    </ButtonPrimary>
  ))
  .add('secondary', () => (
    <ButtonSecondary onPress={action('clicked-text')}>
      {({ textStyle, iconColor }) => (
        <>
          <Icon color={iconColor} name={'bell'} />
          <Text style={[textStyle, { paddingLeft: 12 }]}>More Details</Text>
        </>
      )}
    </ButtonSecondary>
  ))
  .add('primary-reversed', () => (
    <ButtonPrimaryReversed onPress={action('clicked-text')}>
      {({ textStyle, iconColor }) => (
        <>
          <Icon color={iconColor} name={'bell'} />
          <Text style={[textStyle, { paddingLeft: 12 }]}>More Details</Text>
        </>
      )}
    </ButtonPrimaryReversed>
  ))
  .add('secondary-reversed', () => (
    <ButtonSecondaryReversed onPress={action('clicked-text')}>
      {({ textStyle, iconColor }) => (
        <>
          <Icon color={iconColor} name={'bell'} />
          <Text style={[textStyle, { paddingLeft: 12 }]}>More Details</Text>
        </>
      )}
    </ButtonSecondaryReversed>
  ))
  .add('floating', () => (
    <ButtonFloating onPress={action('clicked-text')}>
      {({ iconColor }) => <Icon color={iconColor} name={'create'} />}
    </ButtonFloating>
  ))
  .add('social-icon', () => <ButtonSocialIcon onPress={action('clicked-text')} icon={'facebook'} />)
