import { IconFacebook } from '~assets/icons/facebook.icon'
import { IconGoogle } from '~assets/icons/google.icon'
import { IconHalfStarLeft } from '~assets/icons/half-star-left'
import { IconHalfStarRight } from '~assets/icons/half-star-right'

export default {
  facebook: (size?: number) => IconFacebook({ size }),
  google: (size?: number) => IconGoogle({ size }),
  'half-star-left': (size?: number, stroke?: number, color?: string) =>
    IconHalfStarLeft({ size, stroke, color }),
  'half-star-right': (size?: number, stroke?: number, color?: string) =>
    IconHalfStarRight({ size, stroke, color }),
}
