import { useContext } from 'react'
import sublinks from '../data'
import { AppContext } from '../Context'
import { AiOutlineClose } from 'react-icons/ai'
const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(AppContext)
  return (
    <aside className={isSidebarOpen ? 'show-sidebar' : ''}>
      <button onClick={closeSidebar} className="sidebar-close-icon-btn">
        <AiOutlineClose className="sidebar-close-icon" />
      </button>
      <div className="sublinks">
        {sublinks.map(({ pageId, page, links }) => {
          return (
            <section key={pageId} className="link">
              <h4>{page}</h4>
              <div className="sublink">
                {links.map(({ id, label, icon, url }) => {
                  return (
                    <a href={url} className="sublink-link" key={id}>
                      {icon}
                      {label}
                    </a>
                  )
                })}
              </div>
            </section>
          )
        })}
      </div>
    </aside>
  )
}
export default Sidebar
