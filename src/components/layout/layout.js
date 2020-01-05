import React from "react"
import PropTypes from "prop-types"

import Header from "../header/header"
import Footer from "../footer/footer"
import "./layout.scss"

const Layout = ({ children, title, navigation }) => {
  return (
    <>
      <Header title={title} navigation={navigation} />
      <main>{children}</main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  navigation: PropTypes.array,
}

Layout.defaultProps = {
  title: "",
  navigation: [],
}

export default Layout
