import React, { VFC } from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from './auth-background-image.styles'

interface AuthBackgroundImageProps {
  title?: string;
}

export const AuthBackgroundImage: VFC<AuthBackgroundImageProps> = ({ title = "AuthBackgroundImage" }) => {
  const { t } = useTranslation('auth-background-image');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
