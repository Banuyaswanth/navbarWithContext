import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme && (
            <div className="dark-theme container-properties">
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
              <h1>About</h1>
            </div>
          )}
          {!isDarkTheme && (
            <div className="light-theme container-properties">
              <img
                className="about-image"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
              <h1>About</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
