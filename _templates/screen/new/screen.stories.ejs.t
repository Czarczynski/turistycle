---
to: src/screens/<%= h.changeCase.paramCase(name) %>/<%= h.changeCase.paramCase(name) %>.stories.tsx
unless_exists: true
---

import React from 'react'
import { text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'

import { <%= h.capitalize(h.changeCase.camelCase(name)) %>Screen } from './<%= h.changeCase.paramCase(name) %>.screen'

storiesOf("<%= h.capitalize(h.changeCase.camelCase(name)) %>Screen", module)
  .add("common", () => (
    <<%= h.capitalize(h.changeCase.camelCase(name)) %>Screen title={text("Title", "Hello <%= h.capitalize(h.changeCase.camelCase(name)) %>")} />
  ));
