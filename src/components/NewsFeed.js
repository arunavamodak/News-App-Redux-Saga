import React, { Component } from "react";
import NewsHeadline from "./NewsHeadline";
class NewsFeed extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const fetch = this.props.newsList.map(item => {
      return <NewsHeadline key={item.title} headline={item} />;
    });
    return (
      <div>
        <div className="col-md-12 col-sm-12">
          <img
            style={this.props.loaded ? { display: "none" } : {}}
            width="200"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif"
          />
        </div>
        {fetch}
      </div>
    );
  }
}
export default NewsFeed;
