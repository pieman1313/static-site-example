import React from "react"
import PropTypes from "prop-types"
import MCard from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"

import "./card.scss"

function Card({ title, content }) {
  return (
    <div className="card">
      <MCard>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </MCard>
    </div>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

Card.defaultProps = {
  title: "",
  content: "",
}

export default Card
