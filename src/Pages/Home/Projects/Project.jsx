import React, { useState } from "react";
import "./Project.css";
import { PiInfo } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";

export default function Project({
  media, // Array containing both images and videos
  description,
  title,

  linkGitHub,
  languageTechnology,
}) {
  // Set up state to keep track of the current media index
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  // Function to go to the previous media
  const prevMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  };

  // Function to go to the next media
  const nextMedia = () => {
    setCurrentMediaIndex((prevIndex) =>
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  };
  const currentMedia = media[currentMediaIndex];

  return (
    <div className="project-container">
      <div className="project-media-container">
        {currentMedia.type === "image" ? (
          <img
            src={currentMedia.src}
            alt="project-media"
            className="project-media"
          />
        ) : currentMedia.type === "youtube" ? (
          <iframe
            width="100%"
            height="400px"
            src={`https://www.youtube.com/embed/${currentMedia.src}`}
            title="YouTube video"
            allowFullScreen
            className="project-media"
          ></iframe>
        ) : (
          <video controls className="project-media">
            <source src={currentMedia.src} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Conditionally render the navigation buttons if there are multiple media files */}
        {media.length > 1 && (
          <div className="media-navigation">
            <button className="prev-button" onClick={prevMedia}>
              &#8592; {/* Left Arrow */}
            </button>
            <button className="next-button" onClick={nextMedia}>
              &#8594; {/* Right Arrow */}
            </button>
          </div>
        )}
      </div>

      <div className="project-description-container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="lan-tech">
          <h3>Languages and Technologies:</h3>
          <ul>
            {languageTechnology.map((element, index) => (
              <li key={index}>{element}</li>
            ))}
          </ul>
        </div>
        <div className="description-buttons">
          <a href={linkGitHub} target="_blank">
            <FaGithub></FaGithub>{" "}
          </a>
        </div>
      </div>
    </div>
  );
}
