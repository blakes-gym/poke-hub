import { Navbar, Nav } from 'react-bootstrap'
import Link from 'next/link'

import 'bootstrap/scss/bootstrap.scss'
import '../scss/template.scss'

export default function Template({ children }) {
  const path = router.pathname
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
            ></img>
            Poké Hub
          </h2>
        </div>
        <Navbar
          bg="light"
          expand="lg"
          sticky="top"
          expanded={open}
          onSelect={() => console.log('yaaaay')}
          className="border-top border-bottom"
        >
          <Navbar.Brand>
            {
              {
                ['/']: 'Poke Hub',
                ['/wish-list']: 'Wish List',
                ['/team-analysis']: 'Team Analysis'
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
