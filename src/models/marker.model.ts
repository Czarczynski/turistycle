import { Expose, Type } from 'class-transformer'

export class Marker {
  @Expose()
  @Type(() => ID)
  _id: ID

  @Expose()
  name: string

  @Expose()
  longitude: number

  @Expose()
  latitude: number

  @Expose()
  photos: string[]

  @Expose()
  @Type(() => Rate)
  rates: Rate[]

  @Expose()
  authorUid: string
}

export class ID {
  $oid: string
}

export class Rate {
  user: string
  rate: number
}
