import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
// import FixedPlugin from "../components/FixedPlugin";

import { dashboardRoutes } from "../routes/dashboard";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "black",
      activeColor: "info"
    };
  }

  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel);
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }

  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.body.classList.toggle("perfect-scrollbar-on");
    }
  }

  componentDidUpdate(e) {
    if (e.history.action === "PUSH") {
      this.refs.mainPanel.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
    }
  }

  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };

  handleBgClick = color => {
    this.setState({ backgroundColor: color });
  };

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props}
          routes={dashboardRoutes}
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
        />
        <div className="main-panel" ref="mainPanel">
          <Header {...this.props} />
          <Switch>
            {dashboardRoutes.map((prop, key) => {
              if (prop.redirect) {
                return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
              }
              return (
                <Route path={prop.path} component={prop.component} key={key} />
              );
            })}
          </Switch>
          <Footer fluid />
        </div>
        {/* <FixedPlugin
          bgColor={this.state.backgroundColor}
          activeColor={this.state.activeColor}
          handleActiveClick={this.handleActiveClick}
          handleBgClick={this.handleBgClick}
        /> */}
      </div>
    );
  }
}

export default Dashboard;
