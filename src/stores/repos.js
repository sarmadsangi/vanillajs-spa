import StoreObserver from '../lib/storeObserver'

export default class RepoStore extends StoreObserver {
  fetchRepos () {
    this.set('loading', true)

    window.fetch('https://api.github.com/orgs/vicinity/repos')
      .then(res => res.json())
      .then((body) => {
        this.set('repos', body)
        this.set('loading', false)
      })
  }

  getRepos () {
    return this.get('repos')
  }

  isLoading () {
    return this.get('loading')
  }
}
