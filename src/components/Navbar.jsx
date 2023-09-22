import { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context'
import { AiOutlineMenu } from 'react-icons/ai'
import NavLinks from './NavLinks'
import NavLinkContent from './NavLinkContent'
const Navbar = () => {
  const { openSidebar } = useContext(AppContext)
  const [link, setLink] = useState(null)
  const handleSetLink = (link) => {
    setLink(link)
  }
  const [islinkHover, setIslinkHover] = useState(false)
  const [isNavHover, setIsNavHover] = useState(false)
  const [isNavLinkContentHover, setIsNavLinkContentHover] = useState(false)
  const [showNavLinkContent, setShowNavLinkContent] = useState('')
  const handleLinkHover = (val)=>{
    setIslinkHover(val)
  }
  const handleContentHover = (val)=>{
    setIsNavLinkContentHover(val)
  }
  const handleShowLinkContent = () => {
    if (islinkHover) {
      setShowNavLinkContent('show-nav-link-content')
    } else if (isNavHover || isNavLinkContentHover) {
      return
    } else {
      setShowNavLinkContent('')
    }
  }
  useEffect(() => {
    handleShowLinkContent()
  }, [islinkHover, isNavHover, isNavLinkContentHover])
  return (
    <nav
      onMouseLeave={() => {
        setIsNavHover(false)
      }}
      onMouseEnter={() => {
        setIsNavHover(true)
      }}
    >
      <div className="nav-container">
        <h3>strapi</h3>
        <NavLinks
          handleSetLink={handleSetLink}
          handleLinkHover={handleLinkHover}
        />
        <NavLinkContent
          link={link}
          showNavLinkContent={showNavLinkContent}
          handleContentHover={handleContentHover}
        />
        <button className="menu-icon-container" onClick={openSidebar}>
          <AiOutlineMenu className="menu-icon" />
        </button>
      </div>
    </nav>
  )
}
export default Navbar
