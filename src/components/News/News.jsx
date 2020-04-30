import React, { Component } from "react";
import SingleNews from "./SingleNews";
import "../News/News.css";
class News extends Component {
  state = {
    news: [],
  };
  componentDidMount() {
    const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.source}&apiKey=your-api-key`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => console.log("Error", error));
  }

  RenderItems = () => {
    return this.state.news.map((item) => (
      <SingleNews item={item} key={item.url} />
    ));
  };

  render() {
    return (
      <div className="container ui">
        <h2>News Feed</h2>
        <div className="ui divided items">{this.RenderItems()}</div>
      </div>
    );
  }
}

export default News;
