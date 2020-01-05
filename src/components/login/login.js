import React from "react"
import PropTypes from "prop-types"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import TextField from "@material-ui/core/TextField"
import TypoGraphy from "@material-ui/core/TypoGraphy"

import "./login.scss"

function Login({ onLogin }) {
  return (
    <form className="login" action="">
      <Card>
        <CardContent>
          <TypoGraphy variant="h6" color="inherit">
            Log in
          </TypoGraphy>
          <TextField label="User" />
          <TextField label="Password" type="password" />
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" onClick={onLogin}>
            Login
          </Button>
        </CardActions>
      </Card>
    </form>
  )
}

Login.propTypes = {
  onLogin: PropTypes.func,
}

Login.defaultProps = {
  onLogin: () => {},
}

export default Login
