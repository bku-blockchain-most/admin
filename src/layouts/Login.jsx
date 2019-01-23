import React from "react";
import { Redirect } from "react-router-dom";
import { login } from "../api";
import Loading from "../components/Loading";

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    document.title = "Authencation Portal | Unite Stack";

    this.state = {
      authenticated: false,
      username: "",
      password: "",
      loading: false
    };
  }

  login = () => {
    const { username, password } = this.state;
    this.setState({ loading: true });
    login({ username, password })
      .then(() => this.setState({ loading: false, authenticated: true }))
      .catch(err => {
        console.log(err);
        console.log(err.response);
        this.setState({ loading: false });
        const msg = err.response.data.message;
        setTimeout(() => alert(msg), 100);
      });
  };

  render() {
    if (this.state.authenticated) {
      return <Redirect to="/" />;
    }

    return (
      <div className="login-page">
        <div className="layer" />
        <Loading visible={this.state.loading} />
        <form>
          <img
            src={require("../assets/img/brand.png")}
            alt="Unite Stack Favicon"
          />
          <h3 className="text-center text-uppercase font-weight-bold">
            Admin Portal
          </h3>
          <div className="form-group login-form-input-group">
            <label>
              <i className="fa fa-user" />
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              onChange={ev => this.setState({ username: ev.target.value })}
            />
          </div>
          <div className="form-group login-form-input-group">
            <label>
              <i className="fa fa-key" />
            </label>
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              onChange={ev => this.setState({ password: ev.target.value })}
            />
          </div>
          <button
            type="button"
            className="btn btn-block btn-danger"
            onClick={this.login}
          >
            Login
          </button>
        </form>
        <div className="login-footer">
          BKU Blockchain Lab &copy; {1900 + new Date().getYear()} made with .
          All rights reserved.
        </div>
      </div>
    );
  }
}
