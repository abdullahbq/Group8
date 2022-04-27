import React from "react"
import { Link } from "gatsby"

class Header extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        aria-label="Fifth navbar example"
      >
        <div className="container-fluid">
          <a className="fw-bold navbar-brand" href="/">
            | STUDY-HALL |
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample05"
            aria-controls="navbarsExample05"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample05">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <Link className="fw-bold" to="/">
                <li className="btn text-warning fw-bold">Home </li>
              </Link>

              <Link className="fw-bold" to="/movies">
                <li className="btn text-warning fw-bold">Movies</li>{" "}
              </Link>

              <Link className="fw-bold" to="/contact">
                <li className="btn text-warning fw-bold"> Contact</li>
              </Link>

              <Link className="fw-bold" to="/blog">
                <li className="btn text-warning fw-bold"> Blog</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
