import { useState } from 'react';
import PropTypes from 'prop-types';

const GalleryVideo = ({ url, title, isLiked }) => {
  const [isLike, setIsLike] = useState(false);
  return (
    <div className="video-card">
      <div className="card shadow-sm">
        <img src={url} />
        <div className="card-body">
          <p className="card-text">{title}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setIsLike(!isLike) }
              >
                {isLike ? 'DisLike' : 'Like'}
              </button>
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

GalleryVideo.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  isLiked: PropTypes.bool
};

export default GalleryVideo;
