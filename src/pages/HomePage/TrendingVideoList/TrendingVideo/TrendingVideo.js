import React from 'react';
import PropTypes from 'prop-types';

const TrendingVideo = ({ thumbnailUrl, rank, title, desc, views, publishedOn }) => {
  return (
    <div className="video-card card">
      <img src={thumbnailUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">
          #{rank} {title}
        </h5>
        <p className="card-text">{desc}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{views}</li>
        <li className="list-group-item">{publishedOn}</li>
      </ul>
    </div>
  );
};

TrendingVideo.propTypes = {
  title: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  views: PropTypes.string,
  publishedOn: PropTypes.string,
  desc: PropTypes.string,
  rank: PropTypes.number
};

export default TrendingVideo;
