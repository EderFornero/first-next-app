import Link from 'next/link'
import React from 'react'

const navigation = [
  {
    label: 'Home',
    route: '/'
  },
  {
    label: 'Contact',
    route: '/contact'
  }
]

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          {navigation.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
