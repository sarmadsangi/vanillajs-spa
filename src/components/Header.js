import { header, h1, a, img } from '../lib/dom'

export const Header = () => (
  header({},
    h1({}, 'VanillaJS Single Page App'),
    img({ width: '150', src: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' })
  )
)

