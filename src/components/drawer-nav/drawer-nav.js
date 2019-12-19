import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import TypoGraphy from "@material-ui/core/Typography"
import { Link } from "gatsby"

import "./drawer-nav.scss"

function DrawerNav(props) {
  return (
    <nav className="drawer-nav">
      <List component="ul">
        {props.items.map(item => (
          <ListItem>
            <Link to={item.to}>
              <TypoGraphy color="inherit" variant="title">
                {item.label}
              </TypoGraphy>
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  )
}

export default DrawerNav
