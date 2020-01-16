import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

import headerStyles from './header.module.scss'

const linkList = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          {linkList.map(item => (
            <li key={item.path}>
              <Link
                className={headerStyles.navItem}
                activeClassName={headerStyles.activeNavItem}
                to={item.path}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header
