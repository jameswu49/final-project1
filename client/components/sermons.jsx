import React, { useState, useEffect } from 'react';

export default function VideoList() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyBEYvQw2VN_9-CsZhjPVTte3BA6c5JYD7A&channelId=UCPyVwBGuNgaeoqc8Mas5AOw&part=snippet,id&order=date&maxResults=20');
        const data = await response.json();
        setVideos(data.items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchVideos();
  }, []);

  return (
    <>
      <Title />
      <Videos videos={videos} />
    </>
  );
}

function Title() {
  return (
    <div className='text-center'>
      <h1 className='text-2xl text-gray-800 my-4'>Sermons</h1>
    </div>
  );
}

function Videos({ videos }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {videos.map((video) => (
        <li key={video.id.videoId} className="flex flex-col justify-center items-center">
          <div className="w-full h-0 relative" style={{ paddingBottom: '56.25%' }}>
            <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video.id.videoId}`}
            title={video.snippet.title}
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          </div>
          <div className='flex justify-center mb-4 text-base p-2'>
            <h1 className="<h1 className='text-2xl text-gray-800'>{video.snippet.title}</h1>">{video.snippet.title}</h1>
          </div>
        </li>
      ))}
    </ul>
  );
}
