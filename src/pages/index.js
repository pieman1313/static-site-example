import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"
import Card from "../components/card/card"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      allNavigationJson {
        nodes {
          id
          label
          to
        }
      }
      allPostsJson {
        nodes {
          id
          title
          content
        }
      }
    }
  `)
  return (
    <Layout
      title={data.site.siteMetadata.title}
      navigation={data.allNavigationJson.nodes}
    >
      <SEO title="Home" />
      <section
        style={{
          maxWidth: "400px",
          margin: "50px auto",
        }}
      >
        {data.allPostsJson.nodes.map(post => (
          <Card title={post.title} content={post.content} key={post.id}></Card>
        ))}
      </section>
    </Layout>
  )
}

export default IndexPage
