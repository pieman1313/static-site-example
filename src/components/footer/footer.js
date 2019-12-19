import React from "react"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"

import "./footer.scss"

const Footer = () => (
  <AppBar position="static" component="footer">
    <Toolbar variant="dense">
      <Typography variant="caption" color="inherit">
        © Copyright 2019
      </Typography>
    </Toolbar>
  </AppBar>
)

export default Footer
