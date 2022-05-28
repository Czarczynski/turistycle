---
to: src/features/<%= section %>/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.stories.tsx
unless_exists: true
---

import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import { View } from 'react-native'

import { <%= h.capitalize(h.changeCase.camelCase(name)) %> } from './<%= h.changeCase.paramCase(name) %>.component'

storiesOf("<%= h.capitalize(h.changeCase.camelCase(name)) %>", module)
  .addDecorator((getStory) => <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>{getStory()}</View>)
  .add("common", () => (
    <<%= h.capitalize(h.changeCase.camelCase(name)) %> title={text("Title", "Hello <%= h.capitalize(h.changeCase.camelCase(name)) %>")} />
  ));
