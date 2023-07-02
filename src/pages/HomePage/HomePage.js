import { Helmet } from 'react-helmet-async';
import LatestVideo from './LatestVideo/LatestVideo';
import TrendingVideoList from './TrendingVideoList/TrendingVideoList';
import RecommendedVideoList from './RecommendedVideoList/RecommendedVideoList';
import Subscription from './Subscription/Subscription';
import LifeCycleDemo from './LifeCyclyeDemo/LifeCycleDemo';
import MyProfile from './MyProfile/MyProfile';

// import ContactUs from './ContactUs/ContactUs';

// import { useState } from 'react';

const HomePage = () => {
  // const unreadMessages = ['a', 'b', 'c'];
  return (
    <div className="container pt-5">
      <Helmet>
        <title>Prime Video | Home</title>
      </Helmet>

      <h1>Welcome to Home Page</h1>
      <h2>Latest Videos | Fn Comp and Props</h2>
      <div className="row">
        <div className="col-md-3">
          <LatestVideo
            title="Fra vs Arg FIFA 2022 Final"
            thumbnailUrl="https://placehold.co/260x220"
            views="2.4M"
            publishedDate="10 Days ago"
          >
            Watch highlights of Arg vs Fra FIFA 2022 Final, Qatar
          </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            title="CSK vs KKR 2023 IPL"
            thumbnailUrl="https://placehold.co/260x220"
            views="1.6M"
            publishedDate="1 Day ago"
          >
            Watch highlights of CSK vs KKR 2023 IPL
          </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            title="MI vs RCB 2023 IPL"
            thumbnailUrl="https://placehold.co/260x220"
            views="2M"
            publishedDate="3 Days ago"
          >
            Watch highlights of MI vs RCB 2023 IPL
          </LatestVideo>
        </div>
        <div className="col-md-3">
          <LatestVideo
            title="Trecking in andes"
            thumbnailUrl="https://placehold.co/260x220"
            views="1.6M"
            publishedDate="1 Day ago"
          >
            Watch all the detailed video on trecking in andes
          </LatestVideo>
        </div>
      </div>

      <div className="row mt-5">
        <hr />
        <h2>Trending videos | class comp and states demo</h2>
        <TrendingVideoList />
      </div>

      <div className="row mt-5">
        <hr />
        <h2>Reccommended videos | state event list keys conditional demo</h2>
        <RecommendedVideoList />
      </div>

      <div className="row mt-5">
        <hr />
        <h2>Subscription videos | bootstrap css</h2>
        <Subscription />
      </div>

      <div className="row mt-5">
        <hr />
        <h2>Lifecycle hooks | Demo</h2>
        <LifeCycleDemo />
      </div>

      <div className="row mt-5">
        <hr />
        <h2>Lifecycle hooks | Demo</h2>
        <MyProfile />
      </div>
      {/* {unreadMessages.length > 0 && (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      )}
      {unreadMessages.length > 0 ? (
        <h2>You have {unreadMessages.length} unread messages.</h2>
      ) : (
        <h1>No new messages</h1>
      )} */}
    </div>
  );
};

export default HomePage;
