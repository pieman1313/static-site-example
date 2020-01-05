import React from "react"
import { navigate } from "@reach/router"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Login from "../components/login/login"

function login() {
  window && (window.loggedIn = true)
  navigate("/")
}

const LoginPage = () => (
  <Layout>
    <SEO title="Login page" />
    <section>
      <Login onLogin={login}></Login>
    </section>
  </Layout>
)

export default LoginPage
