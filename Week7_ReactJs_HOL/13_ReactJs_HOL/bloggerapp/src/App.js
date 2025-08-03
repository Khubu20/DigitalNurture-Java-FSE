import React, { useState } from "react";
import BookDetails from "./components/BookDetails";
import BlogDetails from "./components/BlogDetails";
import CourseDetails from "./components/CourseDetails";

function App() {
  const [selected, setSelected] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Blogger App</h1>
      <button onClick={() => setSelected("book")}>Show Book Details</button>
      <button onClick={() => setSelected("blog")}>Show Blog Details</button>
      <button onClick={() => setSelected("course")}>Show Course Details</button>
      <hr />

      {/* Different ways of Conditional Rendering */}

      {/* 1. If-Else Style */}
      {selected === "book" ? (
        <BookDetails />
      ) : selected === "blog" ? (
        <BlogDetails />
      ) : selected === "course" ? (
        <CourseDetails />
      ) : (
        <p>Please select a section to view details.</p>
      )}
    </div>
  );
}

export default App;
