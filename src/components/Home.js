import React, { Component } from "react";
import CountryChooserList from "./CountryChooserList";
import NewsFeed from "./NewsFeed";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { fetchNews } from "../action/action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [],
      SelectedCountry: "",
      loaded: true,
      currentTime: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    setInterval(this.geTdate, 1000);
  }

  changeComponentState = () => {
    this.setState({
      loaded: true
    });
  };
  handleCLick = event => {
    this.setState({ loaded: false });
    let a = event.target.getAttribute("val");
    this.props.fetchNews(a, this.changeComponentState);
  };

  geTdate = () => {
    const a = new Date().toLocaleTimeString();
    this.setState({ currentTime: a });
  };

  render() {
    return (
      <div>
        <p> {this.state.currentTime}</p>
        <CountryChooserList getNews={this.handleCLick} />
        <NewsFeed newsList={this.props.newsArr} loaded={this.state.loaded} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    newsArr: state.newsArr
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchNews
    },
    dispatch
  );

const hoc = connect(
  mapStateToProps,
  mapDispatchToProps
);

const newComponent = hoc(Home);

export default newComponent;
