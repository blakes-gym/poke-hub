import { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'
import { useRouter } from 'next/router'

import 'bootstrap/scss/bootstrap.scss'
import '../scss/template.scss'

const navLinks = [
  { href: '/', text: 'Home' },
  { href: '/wish-list', text: 'Wish List' },
  { href: '/teams', text: 'Teams' }
]

export default function Template({ children }) {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const path = router.pathname
  const toggle = () => setOpen(!open)
  return (
    <div className="bg-secondary">
      <div
        style={{ maxWidth: 1200, minHeight: '100vh' }}
        className="mx-auto bg-white"
      >
        <div>
          <h2 className="text-center py-3 mb-0">
            <img
              src="https://i.imgur.com/JHjpCEa.png"
              style={{ width: '7rem', height: '7rem' }}
            />
            Poké Hub
          </h2>
        </div>
        <div className="sticky-top">
          <Navbar
            bg="light"
            expand="lg"
            expanded={open}
            onSelect={() => console.log('yaaaay')}
            className="border-top border-bottom shadow"
          >
            <Navbar.Brand>
              {
                {
                  ['/']: 'Poke Hub',
                  ['/wish-list']: 'Wish List',
                  ['/teams']: 'Teams'
                }[path]
              }
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggle} />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                {navLinks.map((navLink, i) => (
                  <NavLink
                    {...navLink}
                    path={path}
                    key={`navlink-${i}`}
                    setOpen={setOpen}
                  />
                ))}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          {/* <div className="p-2 bg-white border-bottom">
            <input className="form-control" />
          </div> */}
        </div>
        {children}
      </div>
    </div>
  )
}

function NavLink({ text, href, path, setOpen }) {
  const classes = ['nav-link', 'ml-auto', href === path ? 'active' : '']
  return (
    <Link href={href}>
      <a
        className={classes.join(' ')}
        style={{ textDecoration: href === path ? 'underline' : '' }}
        onClick={() => setOpen(false)}
      >
        {text}
      </a>
    </Link>
  )
}
