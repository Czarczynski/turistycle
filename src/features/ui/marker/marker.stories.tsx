import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'

import { Marker } from './marker.component'

storiesOf("Marker", module)
  .addDecorator((getStory) => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>{getStory()}</View>)
  .add("common", () => (
    <Marker title={text("Title", "Hello Marker")} />
  ));
