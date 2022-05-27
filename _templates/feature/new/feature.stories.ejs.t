---
to: src/features/<%= section %>/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.stories.tsx
unless_exists: true
---

import React from 'zreact'
import { text } from 'z@storybook/addon-knobs'
import { storiesOf } from 'z@storybook/react-native'
import { CenterView } from 'z~features/ui/center-view'

import { <%= h.capitalize(h.changeCase.camelCase(name)) %> } from 'z./<%= h.changeCase.paramCase(name) %>.component'

storiesOf("<%= h.capitalize(h.changeCase.camelCase(name)) %>", module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add("common", () => (
    <<%= h.capitalize(h.changeCase.camelCase(name)) %> title={text("Title", "Hello <%= h.capitalize(h.changeCase.camelCase(name)) %>")} />
  ));
