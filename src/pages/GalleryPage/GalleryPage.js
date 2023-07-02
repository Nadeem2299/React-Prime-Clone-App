import { useReducer, useEffect } from 'react';
import galleryReducer from '../../reducers/galleryReducer';
import axios from 'axios';
import GalleryVideo from './GalleryVideo/GalleryVideo';

const GalleryPage = () => {
  const [videoState, videoDispatch] = useReducer(galleryReducer);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then((res) => {
        // if api call is successful we will get response
        console.log(res.data);
        videoDispatch({
          type: 'LIST_VIDEOS',
          payload: res.data
        });
      })
      .catch((err) => {
        // if error
        console.log(err);
      })
      .finally(() => {
        console.log('it is over!');
      });
  }, []);
  videoState?.forEach((element) => {
    element.isLiked = false;
  });
  const isArrayEmpty = () => {
    if (!Array.isArray(videoState) || videoState?.length === 0) {
      return (
        <div className="alert alert-danger">
          No Videos found
        </div>
      );
    }
  }
  let videoList = null;
  videoList = videoState?.map((item) => {
    return (
      <GalleryVideo
        key={item.id}
        {...item}
      />
    );
  });

  return (
    <div className='container'>
      <h1>GalleryPage</h1>
      <p>
        TODO: Build Photo Gallery kind of implementation here using fetch API
      </p>
      <p>API URL: https://jsonplaceholder.typicode.com/photos?_limit=20</p>
      <p>Refer: https://getbootstrap.com/docs/5.3/examples/album/</p>
      <p>Build Like functionality</p>
      {isArrayEmpty()}
      <div className="video-cards">{videoList}</div>
    </div>
  );
};

export default GalleryPage;
