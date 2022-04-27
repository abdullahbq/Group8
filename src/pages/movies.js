import React from "react"
import { graphql } from "gatsby"
import MoviesFilter from "../components/Filter/MoviesFilter"
import Layout from "../components/Layout/Layout"
import SlideCard from "../components/SlideCard/SlideCard"

const Movies = ({ data }) => {
  return (
    <Layout>
      <SlideCard />
      <div className="container-fluid py-5">
        <h2 className="fat-text pb-2 border-bottom text-center">Movies</h2>
        <div className="row justify-content-center">
          <MoviesFilter items={data} />
        </div>
      </div>
    </Layout>
  )
}

export default Movies

export const pageQuery = graphql`
  query ShopQuery {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/(movies)/.*.(md)/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            name
            year
            rating
            image
            category
          }
        }
      }
    }
  }
`
