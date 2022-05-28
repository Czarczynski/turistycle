import { DateTime } from 'luxon'

export class Message {
  time: DateTime
  senderUid: string
  text: string
}
