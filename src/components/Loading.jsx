import React from "react";

import "assets/scss/loading.scss";

export default class Loading extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div id="loading" hidden={!(this.props.visible || false)}>
        <div className="lds-ellipsis loader">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    );
  }
}
