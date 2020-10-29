import React from "react";
import { Link } from "gatsby";
import logo from "../img/logo.svg";

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: "",
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: "is-active",
            })
          : this.setState({
              navBarActiveClass: "",
            });
      }
    );
  };

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/engineeringstaff">
                Engineering Staff
              </Link>
              <Link className="navbar-item" to="/lathe">
                Lathe
              </Link>
              <Link className="navbar-item" to="/cnc">
                CNC
              </Link>
              <Link className="navbar-item" to="/edm">
                EDM
              </Link>
              <Link className="navbar-item" to="/boring">
                Boring
              </Link>
              <Link className="navbar-item" to="/plateandfabrication">
                Plate & Fabrication
              </Link>
              <Link className="navbar-item" to="/conventionalmachining">
                Conventional Machining
              </Link>
              <Link className="navbar-item" to="/grinders">
                Grinders
              </Link>
              <Link className="navbar-item" to="/presses">
                Presses
              </Link>
              <Link className="navbar-item" to="/diesets">
                Die Sets
              </Link>
              <Link className="navbar-item" to="/Special Designs">
                Special Designs
              </Link>
              <Link className="navbar-item" to="/materialhandling">
                Material Handling
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              {/* <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
};

export default Navbar;
