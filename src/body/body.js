import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Photo from "./apod.js";

const Body = props =>  {
    const [photos, getPhotos] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod")
        .then(response => {
            console.log(response);
            getPhotos(response.data.results);
        })
        .catch(error => {
            console.log("Houston, We have a Problem!", error);;
        })
  }, []);

  console.log(photos);
    return (
        <div className="main">
            <div>
                <h1>Step on up and take a look!</h1>
                <h2>Enjoy the Nasa Space Photos of the Day</h2>
            </div>
            <div className="photo">
                {photos.map(photo => {
                    return (<Photo
                    date ={photo.date}
                    hd ={photo.hd}
                    api ={photo.api_key}
                    />);
                })}
            </div>
        </div>
    );
};

export default Body;

