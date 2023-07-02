import React, { Component } from 'react';
import RecommendedVideo from './RecommendedVideo/RecommendedVideo';

export class RecommendedVideoList extends Component {
  state = {
    videos: [
      {
        id: 1,
        title: 'Ind Vs Aus 2023',
        desc: 'Ind vs Aus on start sports with HD quality',
        views: '700k',
        publishedOn: 'one week ago',
        thumbnailUrl: 'https://placehold.co/260x220',
        isInWatchlist: true
      },
      {
        id: 2,
        title: 'top 10 goals of messi',
        desc: 'Messi top 10 goals',
        views: '700k',
        publishedOn: 'one week ago',
        thumbnailUrl: 'https://placehold.co/260x220',
        isInWatchlist: false
      },
      {
        id: 3,
        title: 'top 10 movies of all time',
        desc: 'Moveis top 10 of all time',
        views: '4M',
        publishedOn: 'one week ago',
        thumbnailUrl: 'https://placehold.co/260x220',
        isInWatchlist: false
      }
    ]
  };
  // event handler

  handleManagelist (index) {
    // do not mutate state directly use setState
    // this.state.videos[0].isInWatchlist =false;
    // duplicating videos array froms state
    const duplicateVideos = [...this.state.videos];
    duplicateVideos[index].isInWatchlist =
      !duplicateVideos[index].isInWatchlist;

    this.setState({
      videos: duplicateVideos
    });
    // alert(this)
  }

  render () {
    // conditional rendering
    if (!Array.isArray(this.state.videos) || this.state.videos.length === 0) {
      return (
        <div className="alert alert-danger">
          Sorry! Unable to fetch recommended Videos.
        </div>
      );
    }
    // ideal place for all comp specific transformations
    // loop thru -- a.k.a lists in react
    // console.log(video)
    let videoList = null;
    videoList = this.state.videos.map((item, index) => {
      return (
        <RecommendedVideo
          key={item.id}
          {...item}
          handleManagelist={this.handleManagelist.bind(this, index)}
        />
      );
    });

    return <div className="video-cards">{videoList}</div>
  }
}
export default RecommendedVideoList;
