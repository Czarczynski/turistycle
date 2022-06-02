import { Expose } from 'class-transformer'

import icons from '~assets/icons'

import { icons as icomoons } from '~features/ui/icon/icon.types'

export class Filter {
  @Expose()
  id: number

  @Expose()
  title: string

  @Expose()
  value: string

  @Expose()
  icon?: keyof typeof icomoons | keyof typeof icons

  @Expose()
  backgroundColor: string
}
