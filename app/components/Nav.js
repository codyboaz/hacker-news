import React from 'react'
import { ThemeConsumer } from '../contexts/theme'
import { NavLink } from 'react-router-dom'

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <ThemeConsumer>
        {({ theme, toggleTheme }) => (
          <nav className='nav-bar'>
            <ul className='nav-items'>
              <li className={`nav-item-${theme}`}><NavLink to='/' exact activeClassName='nav-link-active'>Top</NavLink></li>
              <li className={`nav-item-${theme}`}><NavLink to='/new' activeClassName='nav-link-active'>New</NavLink></li>
            </ul>
            <button
              onClick={toggleTheme}
            >
              {theme === 'light' ? '🔦' : '💡'}
            </button>
          </nav>
        )}
      </ThemeConsumer>
    )
  }
}