import Logo from '../images/logo.svg'
import pageLinks, { socialIcons } from '../data'

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src={Logo} className='nav-logo' alt='backroads' />
            <button type='button' className='nav-toggle' id='nav-toggle'>
              <i className='fas fa-bars'></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className='nav-links' id='nav-links'>
            {pageLinks.map((pageLink) => {
              const { text, id, href } = pageLink
              return (
                <li key={id}>
                  <a href={href} className='nav-link'>
                    {text}
                  </a>
                </li>
              )
            })}
          </ul>
          <ul className='nav-icons'>
            {socialIcons.map((socialIcon) => {
              const { id, iconClass, href } = socialIcon
              return (
                <li key={id}>
                  <a
                    href={href}
                    target='_blank'
                    rel='noreferrer'
                    className='nav-icon'
                  >
                    <i className={iconClass}></i>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </>
  )
}
export default Navbar
