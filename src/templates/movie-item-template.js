import React from "react"
import { graphql } from "gatsby"
import Image from "../components/Images/Images"
import Layout from "../components/Layout/Layout"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Accordion from "../components/Accordion/Accordion"
import { StarFill } from "react-bootstrap-icons"

class Item extends React.Component {
  render() {
    const item = this.props.data.mdx

    return (
      <Layout>
        <div className="figure">
          <Image
            className="img-fluid cover"
            filename={`${item.frontmatter.image}.jpg`}
            style={{
              height: "auto",
              width: "100%",
              margin: "0 auto",
            }}
            alt={item.frontmatter.name}
          />

          <div className="figcaption-fullon">
            <div className="container py-5">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="card shadow mb-4 border-primary">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-3">
                        <Image
                          className="img-fluid shadow"
                          filename={`${item.frontmatter.image}.jpg`}
                          alt={item.frontmatter.name}
                          style={{ borderRadius: "10px" }}
                        />
                      </div>
                      <div className="col-md-9">
                        <p
                          className="badge bg-primary text-light shadow me-1"
                          style={{ fontSize: "0.8em" }}
                        >
                          {item.frontmatter.category}
                        </p>
                        <h2 className="fat-text card-title fw-bold mb-4">
                          {item.frontmatter.name} ({item.frontmatter.year}){" "}
                        </h2>
                        <h4 className="fw-bold text-warning mb-4">
                          <StarFill style={{ marginTop: "-7px" }} />{" "}
                          {item.frontmatter.rating}/10{" "}
                          <span
                            className="text-muted"
                            style={{
                              fontSize: "1rem",
                              fontWeight: "500",
                            }}
                          >
                            IMDB Rating
                          </span>
                        </h4>

                        <Accordion
                          title={"About the Movie"}
                          content={item.frontmatter.description}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container py-5">
              <Accordion
                title={"Things to Learn from this Movie"}
                content={
                  <MDXProvider>
                    <MDXRenderer>{item.body}</MDXRenderer>
                  </MDXProvider>
                }
              />

              <h2 className="fat-text py-5 border-bottom text-center text-primary">
                {item.frontmatter.customField.name}
              </h2>

              <div className="row justify-content-center py-5">
                {item.frontmatter.customField.values.map(option => {
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="card text-center shadow mb-4 p-0">
                        <Image
                          className="d-block my-4"
                          style={{
                            margin: "0 auto",
                            height: "160px",
                            width: "100px",
                            borderRadius: "10px",
                          }}
                          filename={`${option.bookimage}.jpg`}
                          alt={option.bookimage}
                        />

                        <h5 className="fw-bold text-primary m-2">
                          {option.bookname}
                        </h5>
                        <p className="text-muted m-2">
                          By: {option.authorname}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Item

export const query = graphql`
  query ShopItems($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      fields {
        slug
      }
      frontmatter {
        name
        year
        description
        rating
        image
        category
        customField {
          name
          values {
            bookname
            authorname
            bookimage
          }
        }
      }
    }
  }
`
