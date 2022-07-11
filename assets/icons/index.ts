import { IconFacebook } from '~assets/icons/facebook.icon'
import { IconGoogle } from '~assets/icons/google.icon'
import { IconHalfStarLeft } from '~assets/icons/half-star-left'
import { IconHalfStarRight } from '~assets/icons/half-star-right'
import { IconHamburger } from '~assets/icons/hamburger.icon'
import { IconHeart } from '~assets/icons/heart.icon'
import { IconHome } from '~assets/icons/home.icon'
import { IconLoop } from '~assets/icons/loop.icon'
import { IconPin } from '~assets/icons/pin.icon'

export default {
  facebook: (size?: number) => IconFacebook({ size }),
  google: (size?: number) => IconGoogle({ size }),
  'half-star-left': (size?: number, stroke?: number, color?: string) =>
    IconHalfStarLeft({ size, stroke, color }),
  'half-star-right': (size?: number, stroke?: number, color?: string) =>
    IconHalfStarRight({ size, stroke, color }),
  home: (size?: number, stroke?: number, color?: string) => IconHome({ size, stroke, color }),
  heart: (size?: number, stroke?: number, color?: string) => IconHeart({ size, stroke, color }),
  loop: (size?: number, stroke?: number, color?: string) => IconLoop({ size, stroke, color }),
  pin: (size?: number, stroke?: number, color?: string) => IconPin({ size, stroke, color }),
  hamburger: (size?: number, stroke?: number, color?: string) =>
    IconHamburger({ size, stroke, color }),
}
