/*eslint-disable*/
import React from "react";
import { Container, Row } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer" + (this.props.default ? " footer-default" : "")}
      >
        <Container fluid={this.props.fluid ? true : false}>
          <Row>
            <nav className="footer-nav">
              <ul>
                <li>
                  <a href="https://github.com/bku-blockchain" target="_blank">Unite Stack</a>
                </li>
                <li>
                  <a href="https://github.com/bku-blockchain/react-native" target="_blank">App Store</a>
                </li>
                <li>
                  <a href="https://github.com/bku-blockchain/react-native" target="_blank">Google Play</a>
                </li>
                <li>
                  <a href="http://lab.bkchain.tk/license" target="_blank">Licenses</a>
                </li>
              </ul>
            </nav>
            <div className="credits ml-auto">
              <div className="copyright">
                All rights reserved &copy; {1900 + new Date().getYear()} made with <i className="fa fa-heart heart text-danger"></i> by BKU Blockchain Lab
              </div>
            </div>
          </Row>
        </Container>
      </footer>
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
