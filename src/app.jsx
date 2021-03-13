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
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },
    [youtube]
  );

  const onSelect = useCallback(
    video => {
      // selectedVideo가 searchResult일 경우 full description을 먼저 받음
      if (video.kind === 'youtube#searchResult') {
        youtube
          .videoById(video.id) //
          .then(video => {
            setSelectedVideo(video);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          });
      } else {
        setSelectedVideo(video);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [youtube]
  );

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
