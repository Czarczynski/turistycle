import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'

import { AuthBackgroundImage } from './auth-background-image.component'

storiesOf("AuthBackgroundImage", module)
  .addDecorator((getStory) => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>{getStory()}</View>)
  .add("common", () => (
    <AuthBackgroundImage title={text("Title", "Hello AuthBackgroundImage")} />
  ));
