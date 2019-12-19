import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import TypoGraphy from "@material-ui/core/Typography"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Drawer from "@material-ui/core/Drawer"

import Nav from "../nav/nav"
import DrawerNav from "../drawer-nav/drawer-nav"
import "./header.scss"

const Header = ({ siteTitle, links }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <AppBar color="primary" position="static" className="header">
      <Toolbar>
        <Link to="/">
          <TypoGraphy variant="title" color="inherit">
            {siteTitle}
          </TypoGraphy>
        </Link>
        <Nav items={links}></Nav>
        <IconButton
          color="inherit"
          aria-label="navigation menu"
          className="drawer-button"
          onClick={() => setDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          className="header-nav-drawer"
        >
          <DrawerNav items={links}></DrawerNav>
        </Drawer>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
