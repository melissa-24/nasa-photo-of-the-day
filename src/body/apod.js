import React from "react";

const Photo = props => {
  console.log(props);
  return (
    <div>
        <h2>{props.date}</h2>
        <p>{props.hd}</p>
        <p>{props.api_key}</p>
    </div>
);
};

export default Photo;