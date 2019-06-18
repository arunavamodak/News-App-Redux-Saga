import React, { Component } from "react";
import CountryChooser from "./CountryChooser";

class CountryChooserList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="d-flex justify-content-center">
        <CountryChooser
          fetchnews={this.props.getNews}
          CountryName="INDIA"
          CountryCode="IN"
        />
        <CountryChooser
          fetchnews={this.props.getNews}
          CountryName="USA"
          CountryCode="US"
        />
        <CountryChooser
          fetchnews={this.props.getNews}
          CountryName="RUSSIA"
          CountryCode="RU"
        />
        <CountryChooser
          fetchnews={this.props.getNews}
          CountryName="AUSTRALIA"
          CountryCode="AU"
        />
      </div>
    );
  }
}
export default CountryChooserList;
