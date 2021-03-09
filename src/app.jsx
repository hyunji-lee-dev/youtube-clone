import React, { useState } from 'react';
import './app.css';
import Header from './components/header/header';
import VideoPlayer from './components/videoPlayer/videoPlayer';
import VideoList from './components/videoList/videoList';

function App() {
  const [videos, setVideos] = useState([
    {
      key: 1,
      thumbnail: 'images/logo.png',
      title: 'title',
      channel: 'channel',
      detail: 'detail',
      selected: false,
    },
    {
      key: 2,
      thumbnail: 'images/logo.png',
      title: 'title',
      channel: 'channel',
      detail: 'detail',
      selected: false,
    },
    {
      key: 3,
      thumbnail: 'images/logo.png',
      title: 'title',
      channel: 'channel',
      detail: 'detail',
      selected: false,
    },
    {
      key: 4,
      thumbnail: 'images/logo.png',
      title: 'title',
      channel: 'channel',
      detail: 'detail',
      selected: false,
    },
    {
      key: 5,
      thumbnail: 'images/logo.png',
      title: 'title',
      channel: 'channel',
      detail: 'detail',
      selected: false,
    },
    {
      key: 6,
      thumbnail: 'images/logo.png',
      title: 'title',
      channel: 'channel',
      detail: 'detail',
      selected: false,
    },
    {
      key: 7,
      thumbnail: 'images/logo.png',
      title: 'title',
      channel: 'channel',
      detail: 'detail',
      selected: false,
    },
    {
      key: 8,
      thumbnail: 'images/logo.png',
      title: 'title',
      channel: 'channel',
      detail: 'detail',
      selected: false,
    },
  ]);

  const onSelect = id =>
    setVideos(videos =>
      videos.map(video => {
        if (video.key === Number(id)) {
          return { ...video, selected: true };
        } else {
          return { ...video, selected: false };
        }
      })
    );

  const selected = videos.filter(video => video.selected)[0];

  return (
    <>
      <Header />
      <main>
        {selected && <VideoPlayer selected={selected} />}
        <VideoList videos={videos} onSelect={onSelect} selected={selected} />
      </main>
    </>
  );
}

export default App;
