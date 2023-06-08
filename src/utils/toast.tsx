import React from 'react'
import Toast from 'react-native-toast-message'
import { ToastConfig } from 'react-native-toast-message/lib/src/types'

import { MyToast } from '~features/ui/my-toast'
import { MyToastProps } from '~features/ui/my-toast/my-toast.component'

type toastConfigType = 'success' | 'error' | 'info'
export const toastConfig: ToastConfig = {
  success: ({ type, ...props }) => <MyToast type={type as toastConfigType} {...props} />,
  error: ({ type, ...props }) => <MyToast type={type as toastConfigType} {...props} />,
  info: ({ type, ...props }) => <MyToast type={type as toastConfigType} {...props} />,
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
