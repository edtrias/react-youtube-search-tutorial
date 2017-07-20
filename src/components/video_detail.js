import React from 'react';

//the {video} here says: the props has a property called 'video' so, take this property and make it available. So you don't neet to type props every time.
const VideoDetail = ({video}) => {

  //this if statement prevents from trying to render the component before it gets the data {video} from its parent
  if(!video) {
    return (<div>Loading...</div>)
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  )
};

export default VideoDetail;
