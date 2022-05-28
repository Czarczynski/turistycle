import { Expose, Transform } from 'class-transformer'
import { DateTime } from 'luxon'

export class Message {
  @Expose()
  senderUid: string

  @Expose()
  text: string

  @Expose()
  @Transform(({ obj }) => DateTime.fromISO(obj.time))
  time: DateTime
}
