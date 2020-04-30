import React from "react";
const SingleNews = ({ item }) => (
  <div className="item">
    <div className="image">
      <img src={item.urlToImage} alt={item.title} />
    </div>
    <div className="content">
      <a className="header" href={item.url}>
        {item.title}
      </a>
      <div className="meta">
        <span className="cinema">{item.source.name}</span>
      </div>
      <div className="description">
        <p>{item.publishedAt}</p>
      </div>
    </div>
  </div>
);
export default SingleNews;
