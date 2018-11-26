export default class Observer {
  constructor () {
    this.observers = {}
    this.store = {}
  }

  getObserver (event) {
    if (!this.observers[event]) { this.observers[event] = [] }

    return this.observers[event]
  }

  get (key) {
    return this.store[key]
  }

  set (key, value) {
    this.store[key] = value
    this.fire(`change:${key}`, value)
  }

  on (event, fn) {
    const keys = event.split(':')
    this.getObserver(event).push(fn)
    fn(this.store[keys[1]])
  }

  off (event, fn) {
    this.observers[event] = this.getObserver(event).filter((subscriber) => subscriber !== fn)
  }

  fire (event, data) {
    this.getObserver(event).forEach((subscriber) => subscriber(data))
  }
}
