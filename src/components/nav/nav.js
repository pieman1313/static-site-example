import React from "react"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import TypoGraphy from "@material-ui/core/Typography"
import { Link } from "gatsby"

function Nav(props) {
  return (
    <List component="nav" className="nav">
      <ListItem component="ul">
        {props.items.map(item => (
          <li key={item.id}>
            <ListItemText inset>
              <Link to={item.to}>
                <TypoGraphy color="inherit" variant="inherit">
                  {item.label}
                </TypoGraphy>
              </Link>
            </ListItemText>
          </li>
        ))}
      </ListItem>
    </List>
  )
}

export default Nav
