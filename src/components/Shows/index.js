import React from "react";

const Shows = ({ shows }) => {
  console.log(shows);
  return (
    <div>
      {shows.map((show, i) => {
        return <h1 key={i}>{show.show_name}</h1>;
      })}
    </div>
  );
};

export default Shows;
