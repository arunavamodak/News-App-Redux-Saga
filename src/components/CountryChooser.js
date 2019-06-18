import React, { Component } from "react";

class CountryChooser extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-success"
          val={this.props.CountryCode}
          onClick={this.props.fetchnews}
        >
          {this.props.CountryName}
        </button>
      </div>
    );
  }
}

export default CountryChooser;
