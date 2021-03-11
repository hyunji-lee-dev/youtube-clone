import React, { useCallback, useEffect, useState } from 'react';
import styles from './app.module.css';
import Header from './components/header/header';
import VideoPlayer from './components/videoPlayer/videoPlayer';
import VideoList from './components/videoList/videoList';

function App({ youtube }) {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    youtube
      .mostPopular() //
      .then(setVideos);
  }, [youtube]);

  const onSubmit = useCallback(
    inputValue => {
      youtube
        .search(inputValue) //
        .then(setVideos);
    },
    [youtube]
  );

  const onSelect = useCallback(
    id =>
      setVideos(videos =>
        videos.map(video => {
          if (video.id === id) {
            return { ...video, selected: true };
          } else if (video.selected) {
            return { ...video, selected: false };
          } else {
            return video;
          }
        })
      ),
    []
  );

  const selectedVideo = videos.filter(video => video.selected)[0];

  return (
    <>
      <Header onSubmit={onSubmit} />
      <main className={styles.main}>
        {selectedVideo && (
          <VideoPlayer id={selectedVideo.id} snippet={selectedVideo.snippet} />
        )}
        <VideoList
          videos={videos}
          onSelect={onSelect}
          toBeSide={Boolean(selectedVideo)}
        />
      </main>
    </>
  );
}

export default App;
