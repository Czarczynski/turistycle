import React from 'react'
import Toast from 'react-native-toast-message'

import { MyToast } from '~features/ui/my-toast'
import { MyToastProps } from '~features/ui/my-toast/my-toast.component'

type toastConfigType = {
  [key in 'success' | 'error' | 'info']: (props: MyToastProps) => React.ReactElement
}
export const toastConfig: toastConfigType = {
  success: (props) => <MyToast {...props} />,
  error: (props) => <MyToast {...props} />,
  info: (props) => <MyToast {...props} />,
}
export const showToast = (options: MyToastProps) => {
  Toast.show({
    ...options,
    position: 'top',
    visibilityTime: 4000,
    autoHide: true,
    topOffset: 10,
    bottomOffset: 40,
  })
}
