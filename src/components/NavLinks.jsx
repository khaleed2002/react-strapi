import sublinks from '../data'
const NavLinks = ({
  handleSetLink,
  handleLinkHover,
}) => {
  return (
    <ul className="nav-links">
      {sublinks.map(({ pageId, page, links }) => {
        return (
          <li
            key={pageId}
            onMouseEnter={() => {
              handleSetLink({ pageId, page, links })
              handleLinkHover(true)
            }}
            onMouseLeave={() => {
              handleLinkHover(false)
            }}
          >
            <h5>{page}</h5>
          </li>
        )
      })}
    </ul>
  )
}
export default NavLinks
