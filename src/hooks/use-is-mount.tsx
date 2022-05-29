import React, { useEffect } from 'react'

export default function useIsMount() {
  const [isMount, setIsMount] = React.useState(false)

  useEffect(() => {
    setIsMount(true)
  }, [])

  return isMount
}
