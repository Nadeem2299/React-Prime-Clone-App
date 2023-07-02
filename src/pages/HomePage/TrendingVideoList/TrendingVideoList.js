// class component and states demo
// must inherit react component class

import { Component } from 'react';
import TrendingVideo from './TrendingVideo/TrendingVideo';

class TrendingVideoList extends Component {
  // must have render method
  //   x=10;

  //   constructor(){
  // super();  //use it to use this keyword
  // public variable
  // this.x = 10;

  // state is a keyword in react
  // state is a object
  // keep command-wide unupdated data in state
  // }
  state = {
    trendingVideos: [
      {
        id: 1,
        rank: 1,
        title: 'Man vs Wild',
        desc: 'Man vs wild on discover with bear grils',
        views: '700k',
        publishedOn: 'one week ago',
        thumbnailUrl: 'https://placehold.co/260x220'
      },
      {
        id: 2,
        rank: 2,
        title: 'plannet earth IT',
        desc: 'Man vs wild on discover with bear grils',
        views: '400k',
        publishedOn: 'one week ago',
        thumbnailUrl: 'https://placehold.co/260x220'
      },
      {
        id: 3,
        rank: 3,
        title: 'top 10 hip hop songs',
        desc: 'best hip hop songs by artists',
        views: '3M',
        publishedOn: 'one day ago',
        thumbnailUrl: 'https://placehold.co/260x220'
      },
      {
        id: 4,
        rank: 4,
        title: 'Super cars all time best performance',
        desc: 'all you know about Super cars all time best performance',
        views: '7M',
        publishedOn: 'two week ago',
        thumbnailUrl: 'https://placehold.co/260x220'
      }
    ],
    videoResolution: '4k'
  };

  handleChangeResolution = () => {
    // console.log(this.state.videoResolution);
    // this.state.videoResolution = '8k'
    // if u update state directly data will be updated not UI

    // render method will be called just after setState is called
    this.setState({
      videoResolution: '8k'
    });
    // console.log(this.state.videoResolution);
  };

  render () {
    return (
      <>
        <p>
          Enjot these shows in {this.state.videoResolution} Resolution
          <button
            className="btn btn-primary btn-sm mx-2"
            onClick={this.handleChangeResolution}
          >
            Change Resolution
          </button>
        </p>
        {/* <p>{this.x}</p> */}
        <div className="video-cards">
          {this.state.trendingVideos.map((item) => (
            <TrendingVideo
              key={item.id}
              {...item}
            />
          ))}
        </div>
      </>
    );
  }
}

export default TrendingVideoList;
