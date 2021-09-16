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
              <h1>{title}</h1>
              <a href={url} target="_blank" rel='noopener noreferrer'></a>
              <p>{text}</p>
              <p>{points} Points</p>
              <p>{num_comments} Comments</p>
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
