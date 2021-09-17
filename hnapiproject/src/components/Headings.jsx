import React from "react";
import { useHeadingContext } from "../util/context";

const Headings = () => {
  const { loading, hits, removeStory } = useHeadingContext();
  if (loading) {
    return <div className="loading"></div>;
  }

  return (
    <section className="main">
      {hits.map((hit) => {
        const {
          objectID: id,
          author,
          title,
          url,
          text,
          points,
          num_comments,
        } = hit;

        return (
          <div key={id} className="container">
            <div className="heading">
              <h3>{title}</h3>
              <a href={url} target="_blank" rel="noopener noreferrer">Read More</a>
              <p>
                {text}
                {points} Points
                {num_comments} Comments
              </p>
              <p> Written By{author}</p>

              <button className="remove-btn" onCLick={() => removeStory(id)}>
                REMOVE
              </button>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Headings;
