import React from 'react'
import { Link } from 'gatsby'

import headerStyles from './header.module.scss'

const linkList = [
  { path: '/', label: 'Home' },
  { path: '/blog', label: 'Blog' },
  { path: '/about', label: 'About' },
  { path: '/contact', label: 'Contact' },
]

const Header = () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title} to="/">
          Rennerwin
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
