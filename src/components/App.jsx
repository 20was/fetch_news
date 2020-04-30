import React, { Component } from "react";
import News from "../components/News/News";
class App extends Component {
  state = {
    news1: {
      type: "everything",
      source: "domains=wsj.com,nytimes.com",
    },
    news2: {
      type: "top-headlines",
      source: "sources=bbc-news",
    },
  };
  render() {
    return (
      <>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
      </>
    );
  }
}

export default App;
