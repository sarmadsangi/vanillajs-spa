import { header, div, a, p } from '../lib/dom'
import { Loader } from '../components/Loader'
import styles from './Repos.css'

export const Repos = (repoStore) => {
  if (repoStore.isLoading()) {
    return Loader()
  }

  const repos = repoStore.getRepos().map(repo =>
    a({
      style: { display: 'block' },
      href: `https://github.com/${repo.full_name}`
    }, repo.name)
  )

  return (
    div({ className: 'repos' },
      p({ className: `header__title` }, `Vicinity Public Repos`),
      repos,
      a({ style: { display: 'block', marginTop: '50px' }, href: '#' }, 'Go back to home page')
    )
  )
}
