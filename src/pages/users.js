import React, { useState, useEffect } from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Card from "../components/card/card"

const UsersPage = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/users.json")
      .then(res => res.json())
      .then(setUsers)
  }, [])

  return (
    <Layout>
      <SEO title="Users Page" />
      {users.map(user => (
        <Card title={user.name} content={user.email} key={user.id}></Card>
      ))}
    </Layout>
  )
}

export default UsersPage
