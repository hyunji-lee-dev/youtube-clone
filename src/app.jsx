import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoPlayer from './components/videoPlayer/videoPlayer';
import VideoList from './components/videoList/videoList';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos);
  }, [youtube]);

  const onSubmit = useCallback(
    inputValue => {
      youtube
        .search(inputValue) //
        .then(videos => {
          setVideos(videos);
          setSelectedVideo(null);
        });
    },
    [youtube]
  );

  const onSelect = useCallback(setSelectedVideo, []);

  return (
    <>
      <Header onSubmit={onSubmit} />
      <main className={styles.main}>
        {selectedVideo && (
          <VideoPlayer id={selectedVideo.id} snippet={selectedVideo.snippet} />
        )}
        <VideoList
          videos={videos}
          selectedVideo={selectedVideo}
          onSelect={onSelect}
          layout={selectedVideo ? 'side' : 'center'}
        />
      </main>
    </>
  );
}

export default App;
