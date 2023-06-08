import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'

import { AuthLoginSection } from './auth-login-section.component'

storiesOf("AuthLoginSection", module)
  .addDecorator((getStory) => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>{getStory()}</View>)
  .add("common", () => (
    <AuthLoginSection title={text("Title", "Hello AuthLoginSection")} />
  ));
