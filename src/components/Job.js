import React, { useState } from "react";

const Job = (props) => {
  const { company, logo, position, timing, location, keywords, posted_on } =
    props.data;

  const [imageSrc, setImageSrc] = useState(logo);

  return (
    <>
      <div className="job-container">
        <div className="logo">
          <img src={imageSrc} alt={company} />
        </div>
        <div className="part1">
          <div className="company">
            <div className="cname">{company}</div>
            {props.data.new && <span className="new">new!</span>}
            {props.data.featured && <span className="featured">featured</span>}
          </div>
          <div className="position">{position}</div>
          <div className="details">
            <span>{posted_on}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{timing}</span>
            <span>&nbsp;•&nbsp;</span>
            <span>{location}</span>
          </div>
        </div>

        <div className="part2">
          {keywords.map((key, id) => (
            <button onClick={() => props.setKeywords(key)} key={id}>
              <span>{key}</span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Job;
