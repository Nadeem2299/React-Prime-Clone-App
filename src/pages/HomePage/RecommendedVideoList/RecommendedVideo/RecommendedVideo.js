import PropTypes from 'prop-types';

const RecommendedVideo = ({ thumbnailUrl, title, desc, views, publishedOn, handleManagelist, isInWatchlist }) => {
  return (
    <div className="card video-card">
      <img src={thumbnailUrl} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">{views}</li>
        <li className="list-group-item">{publishedOn}</li>
        <li className="list-group-item">
          <button
            type="button"
            className="btn btn-success btn-sm"
            onClick={() => handleManagelist()}
          >
            {isInWatchlist ? 'In watchlist' : 'Add to watchlist'}
          </button>
        </li>
      </ul>
    </div>
  );
};

RecommendedVideo.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
  views: PropTypes.string,
  publishedOn: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  isInWatchlist: PropTypes.bool,
  handleManagelist: PropTypes.func
};

export default RecommendedVideo;
