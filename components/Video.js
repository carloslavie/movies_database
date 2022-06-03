/* eslint-disable prettier/prettier */
import React from 'react';
import VideoPlayer from 'react-native-video-controls';

const Video = ({showVideo}) => {
  return (
    <VideoPlayer
      onBack={() => showVideo()}
      onEnd={() => showVideo()}
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
    />
  );
};

export default Video;
