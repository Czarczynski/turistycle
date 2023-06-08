import { observer } from 'mobx-react-lite'
import React, { VFC } from 'react'
import { FlatList, ImageBackground, ScrollView, View } from 'react-native'

import ImageBg from '~assets/images/bg.png'

import { CardHome } from '~features/ui/card-home'
import { CardLong } from '~features/ui/card-long'

import styles from './home.styles'

interface HomeScreenProps {}

export const HomeScreen: VFC<HomeScreenProps> = observer(() => {
  return (
    <ImageBackground style={styles.container} source={ImageBg}>
      <ScrollView contentContainerStyle={styles.innerContainer}>
        <CardLong />
        <FlatList
          keyExtractor={(item) => `${item}`}
          data={[0, 1]}
          style={styles.list}
          contentContainerStyle={styles.listContainer}
          horizontal
          renderItem={({ item }) => <CardHome key={item} />}
          ItemSeparatorComponent={Separator}
          showsHorizontalScrollIndicator={false}
        />
      </ScrollView>
    </ImageBackground>
  )
})

const Separator = () => <View style={styles.separator} />
