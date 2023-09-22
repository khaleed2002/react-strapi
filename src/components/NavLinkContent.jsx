const NavLinkContent = ({
  link,
  showNavLinkContent,
  handleContentHover,
}) => {
  return (
    <section
      className={`nav-link-content ${showNavLinkContent}`}
      onMouseLeave={() => {
        handleContentHover(false)
      }}
      onMouseEnter={() => {
        handleContentHover(true)
      }}
    >
      <h4>{link && link.page}</h4>
      <ul>
        {link &&
          link.links.map(({ id, label, icon, url }) => {
            return (
              <a href={url} className="sublink-link" key={id}>
                {icon}
                {label}
              </a>
            )
          })}
      </ul>
    </section>
  )
}
export default NavLinkContent
