import React from "react";
import { useHeadingContext } from "../util/context";

const Widget = () => {
  const { fetchHeading, loading } = useHeadingContext;
  if (loading) {
    return <div className="loading"></div>;
  }

  return (<div>Hello!</div>
    // <section className="headings">
    //   {fetchHeading.map((heading) => {
    //     const { author, title, url, text, points } = heading;

    //     return (
    //       <article>
    //         <div className="heading-info">
    //           <h2 className="title">{title}</h2>
    //           <p>{text}</p>
    //           <p>{points}</p>
    //           <p>{author}</p>
    //           <a href={url}> Read More</a>
    //         </div>
    //       </article>
    //     );
    //   })}
    // </section>
  );
};

export default Widget;
