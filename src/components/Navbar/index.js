import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const themeName = isDarkTheme ? 'dark-theme' : 'light-theme'
      const websiteLogoUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const themeUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <nav className={`${themeName} navbar`}>
          <img
            className="website-logo"
            src={websiteLogoUrl}
            alt="website logo"
          />

          <ul className="list-container">
            <li className="list-item">
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
          <button
            className="theme-toggle-button"
            data-testid="theme"
            onClick={toggleTheme}
          >
            <img className="theme" src={themeUrl} alt="theme" />
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
