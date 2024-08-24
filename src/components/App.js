import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import Article from "./Article";
import ArticleList from "./ArticleList";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} />
      <Article about={blogData.about} image={blogData.image}  />
      <ArticleList posts={blogData.posts} />
    </div>
  );
}

export default App;
