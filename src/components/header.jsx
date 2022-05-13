import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import MainMenu from "./mainMenu"
import logo from "../../content/assets/new_logo.svg"
import logoBlack from "../../content/assets/new_logo_black.svg"
import { useState, useEffect } from "react"

//

const Header = () => {
  const [stickyClass, setStickyClass] = useState("")
  const [showMobMenu, setMobMenuClass] = useState("false")

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar)
    return () => window.removeEventListener("scroll", stickNavbar)
  }, [])

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY
      windowHeight > 10 ? setStickyClass("scrolled") : setStickyClass("")
    }
  }

  const toggleMobMenu = () => {
    setMobMenuClass(!showMobMenu);

  }

  return (
    <>
      <header
        id="header"
        style={{ borderBottom: "1px solid #898C92" }}
        className={`clixsy_header sticky top-0 z-40 transition-all ${stickyClass}`}
      >
        <div className="flex items-center justify-between container mx-auto h-20">
          <Link to="/" className="logo">
            <img
              height={35}
              width="145"
              className="m-0"
              alt="Clixsy Logo"
              src={logo}
            />
            <img
              height={35}
              width="145"
              className="scrolled_logo m-0"
              alt="Clixsy Logo"
              src={logoBlack}
            />
          </Link>
          <MainMenu />
          <a
            href="tel:(801)701-2030"
            className="call_us font-oswald text-white uppercase font-medium"
          >
            <span>CALL US:</span> (801) 701-2030
          </a>
          <div className={`mobile_menu_toggle`} onClick={toggleMobMenu}>
            <svg
              width="24"
              height="12"
              viewBox="0 0 24 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.749981 1.49996H23.25C23.664 1.49996 23.9999 1.16393 23.9999 0.749981C23.9999 0.335964 23.6639 0 23.25 0H0.749981C0.335964 0 0 0.336026 0 0.749981C0 1.16393 0.336026 1.49996 0.749981 1.49996Z"
                fill="white"
              />
              <path
                d="M23.25 5.25H0.749981C0.335964 5.25 0 5.58603 0 5.99998C0 6.41393 0.336026 6.74996 0.749981 6.74996H23.25C23.664 6.74996 23.9999 6.41393 23.9999 5.99998C23.9999 5.58603 23.664 5.25 23.25 5.25Z"
                fill="white"
              />
              <path
                d="M23.25 10.5H8.24998C7.83596 10.5 7.5 10.836 7.5 11.25C7.5 11.664 7.83603 12 8.24998 12H23.25C23.664 12 23.9999 11.6639 23.9999 11.25C24 10.836 23.664 10.5 23.25 10.5Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </header>
      <div id="mob_menu" className={`mobile_menu container ${showMobMenu ? '' : 'active'}`}>
        <div className="mobile_menu_close" onClick={toggleMobMenu}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.2941 21.8824L2.11755 0.705867C1.72788 0.316203 1.09542 0.316261 0.705816 0.705866C0.31621 1.09547 0.316211 1.72799 0.705816 2.1176L21.8824 23.2941C22.272 23.6838 22.9045 23.6837 23.2941 23.2941C23.6837 22.9045 23.6837 22.2721 23.2941 21.8824Z"
              fill="white"
            />
            <path
              d="M21.8824 0.705733L0.705867 21.8823C0.316203 22.2719 0.316261 22.9044 0.705866 23.294C1.09547 23.6836 1.72799 23.6836 2.1176 23.294L23.2941 2.11747C23.6838 1.7278 23.6837 1.09534 23.2941 0.705732C22.9045 0.316127 22.2721 0.316069 21.8824 0.705733Z"
              fill="white"
            />
          </svg>
        </div>
        <MainMenu />
      </div>
      <div id="mm_over" className={`mob_menu_overlay ${showMobMenu ? '' : 'active'}`} onClick={toggleMobMenu}></div>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
