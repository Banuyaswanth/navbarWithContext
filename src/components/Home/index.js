import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <>
          <Navbar />
          {isDarkTheme && (
            <div className="dark-theme container-properties">
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
              <h1>Home</h1>
            </div>
          )}
          {!isDarkTheme && (
            <div className="light-theme container-properties">
              <img
                className="home-image"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
              <h1>Home</h1>
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
