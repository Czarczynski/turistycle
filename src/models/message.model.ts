/* eslint-disable @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-argument */
import { Expose, Transform, Type } from 'class-transformer'
import { DateTime } from 'luxon'

export class Message {
  @Expose()
  senderUid: string

  @Expose()
  text: string

  @Expose()
  @Transform(({ obj }) => DateTime.fromSeconds(obj.time.seconds))
  time: DateTime
}
