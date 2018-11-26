import { div } from './lib/dom'
import { Home } from './pages/Home'
import { Repos } from './pages/Repos'

import { Header } from './components/Header'

import { getRoute } from './lib/route'

import RepoStore from './stores/repos'

const repoStore = new RepoStore()
const renderPage = (page) => {
  const app = document.querySelector('#app')
  app.innerHTML = null
  app.appendChild(div({}, Header(), page))
}

export const renderApp = () => {
  switch (getRoute()) {
    case '#repos':
      repoStore.fetchRepos()
      repoStore.on('change:loading', () => {
        renderPage(Repos(repoStore))
      })

      break

    default:
      renderPage(Home())

      break
  }
}

renderApp()
window.onhashchange = () => renderApp()
