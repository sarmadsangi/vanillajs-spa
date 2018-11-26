export const render = (html, $node) => {
  $node.innerHTML = html
}


// Credit to https://hackernoon.com/architecting-single-page-applications-b842ea633c2e

const attributeExceptions = [
  `role`,
]

export const appendText = (el, text) => {
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
}

export const appendArray = (el, children) => {
  children.forEach((child) => {
    if (Array.isArray(child)) {
      appendArray(el, child)
    } else if (child instanceof window.Element) {
      el.appendChild(child)
    } else if (typeof child === `string`) {
      appendText(el, child)
    }
  })
}

export const setStyles = (el, styles) => {
  if (!styles) {
    el.removeAttribute(`styles`)
    return
  }

  Object.keys(styles).forEach((styleName) => {
    if (styleName in el.style) {
      el.style[styleName] = styles[styleName] // eslint-disable-line no-param-reassign
    } else {
      console.warn(`${styleName} is not a valid style for a <${el.tagName.toLowerCase()}>`)
    }
  })
}

export const makeElement = (type, textOrPropsOrChild, ...otherChildren) => {
  const el = document.createElement(type)

  if (Array.isArray(textOrPropsOrChild)) {
    appendArray(el, textOrPropsOrChild)
  } else if (textOrPropsOrChild instanceof window.Element) {
    el.appendChild(textOrPropsOrChild)
  } else if (typeof textOrPropsOrChild === `string`) {
    appendText(el, textOrPropsOrChild)
  } else if (typeof textOrPropsOrChild === `object`) {
    Object.keys(textOrPropsOrChild).forEach((propName) => {
      if (propName in el || attributeExceptions.includes(propName)) {
        const value = textOrPropsOrChild[propName]

        if (propName === `style`) {
          setStyles(el, value)
        } else if (value) {
          el[propName] = value
        }
      } else {
        console.warn(`${propName} is not a valid property of a <${type}>`)
      }
    })
  }

  if (otherChildren) appendArray(el, otherChildren)

  return el
}

export const a = (...args) => makeElement(`a`, ...args)
export const img = (...args) => makeElement('img', ...args)
export const button = (...args) => makeElement(`button`, ...args)
export const div = (...args) => makeElement(`div`, ...args)
export const h1 = (...args) => makeElement(`h1`, ...args)
export const header = (...args) => makeElement(`header`, ...args)
export const p = (...args) => makeElement(`p`, ...args)
export const span = (...args) => makeElement(`span`, ...args)
