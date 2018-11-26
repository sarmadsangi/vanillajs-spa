import { div, p, a } from '../lib/dom'
 
import styles from './Home.css'

export const Home = () => (
  div({ className: styles.container },
    p({}, 'Using plain javascript we can build modern Single Page Applications easily. This examples shows how to do some bits of it.'),
    a({ href: '/#repos' }, 'Click here to trigger client side route')
  )
)
