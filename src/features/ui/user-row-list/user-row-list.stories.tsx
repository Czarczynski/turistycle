import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'

import { UserRowList } from './user-row-list.component'

storiesOf("UserRowList", module)
  .addDecorator((getStory) => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>{getStory()}</View>)
  .add("common", () => (
    <UserRowList title={text("Title", "Hello UserRowList")} />
  ));
