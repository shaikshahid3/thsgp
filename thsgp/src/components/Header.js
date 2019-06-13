import React from 'react'
import {Link} from 'react-router-dom'
import './Header.css'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hasScrolled: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  

  render() {
    return (
      <div className={this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <Link to="/"><img src='https://www.thehackingschool.com/images/ths-trans.png' width="100" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/login">Login</Link>
        
        </div>
      </div>
    )
  }
}

export default Header
