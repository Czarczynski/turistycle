import React, { VFC } from 'react'
import { View, Text } from 'react-native'
import { useTranslation } from 'react-i18next'

import styles from './auth-login-section.styles'

interface AuthLoginSectionProps {
  title?: string;
}

export const AuthLoginSection: VFC<AuthLoginSectionProps> = ({ title = "AuthLoginSection" }) => {
  const { t } = useTranslation('auth-login-section');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
