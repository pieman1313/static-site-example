import React from "react"
import { Redirect } from "@reach/router"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import Button from "@material-ui/core/Button"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const AdminPage = () => (
  <Layout>
    <SEO title="Admin page" />
    {!(typeof window !== `undefined` && window.loggedIn) ? (
      <Redirect to={"/login"} noThrow></Redirect>
    ) : (
      <>
        <p>admin page</p>
        <Link to="/">go home</Link>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            window && (window.loggedIn = false)
            navigate("/")
          }}
        >
          Logout
        </Button>
      </>
    )}
  </Layout>
)

export default AdminPage
