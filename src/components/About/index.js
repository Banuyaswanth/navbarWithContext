import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const themeType = isDarkTheme ? 'dark-theme' : 'light-theme'
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      return (
        <>
          <Navbar />
          <div className={`${themeType} container-properties`}>
            <img className="about-image" src={imageUrl} alt="about" />
            <h1>About</h1>
          </div>
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
