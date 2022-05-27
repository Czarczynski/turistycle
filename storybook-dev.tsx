import {StatusBar} from "expo-status-bar";
import React from "react";
import StorybookUIRoot from "./storybook";

export const Storybook = () => {
  return (
    <>
      <StatusBar style="dark" />
      {/*@ts-ignore*/}
      <StorybookUIRoot />
    </>
  )
}
