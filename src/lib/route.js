export const getHashSegments = () => {
  return window.location.hash.split('/')
}

export const getRoute = () => {
  const hashParts = getHashSegments()
  return hashParts[0]
}

export const goto = (hash) => {
  window.location.hash = hash
}
