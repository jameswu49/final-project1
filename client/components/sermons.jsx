import React, { useState, useEffect } from 'react';

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBEYvQw2VN_9-CsZhjPVTte3BA6c5JYD7A&channelId=UCPyVwBGuNgaeoqc8Mas5AOw&part=snippet,id&order=date&maxResults=20');
      const data = await response.json();
      setVideos(data.items);
    }

    fetchVideos();
  }, []);

  return (
    <ul>
      {videos.map((video) => (
        <li key={video.id.videoId}>
          <iframe
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <div className='flex justify-center mb-4 text-base p-2'>
            <h1>{video.snippet.title}</h1>
          </div>
        </li>
      ))}
    </ul>
  );
}
