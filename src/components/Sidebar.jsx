import React from "react";
import { NavLink } from "react-router-dom";
import { Nav } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "../assets/img/favicon.png";
import brandname from "../assets/img/brand_name.png";

var ps;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.activeRoute.bind(this);
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.sidebar, {
        suppressScrollX: true,
        suppressScrollY: false
      });
    }
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
  }
  render() {
    return (
      <div
        className="sidebar"
        data-color={this.props.bgColor}
        data-active-color={this.props.activeColor}
      >
        <div className="logo" style={{ backgroundColor: "#f4f3ee" }}>
          <a href="http://lab.bkchain.tk" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="lab-logo" />
            </div>
          </a>
          <a href="http://lab.bkchain.tk" className="simple-text logo-normal">
            <div className="logo-img">
              <img src={brandname} alt="lab-logo" />
            </div>
          </a>
          {/* <a href="http://lab.bkchain.tk" className="simple-text logo-mini">
            <div className="logo-img">
              <img src={logo} alt="lab-logo" />
            </div>
          </a>
          <a href="http://lab.bkchain.tk" className="simple-text logo-normal">
            BKU Blockchain
          </a> */}
        </div>
        <div className="sidebar-wrapper" ref="sidebar">
          <Nav>
            {this.props.routes.map((prop, key) => {
              if (prop.redirect) return null;
              if (prop.noSidebar) return null;
              return (
                <li
                  className={
                    this.activeRoute(prop.path) +
                    (prop.pro ? " active-pro" : "")
                  }
                  key={key}
                >
                  <NavLink
                    to={prop.path}
                    className="nav-link"
                    activeClassName="active"
                  >
                    <i className={prop.icon} />
                    <p>{prop.name}</p>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </div>
      </div>
    );
  }
}

export default Sidebar;
