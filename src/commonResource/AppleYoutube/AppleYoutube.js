import React, { useEffect, useState } from 'react';
const YT_API_KEY = "AIzaSyDJFtK4wQFfEu-30f3lyB8Z22bUwvHbByA"
const APPLE_CHANNEL_ID = "UCE_M8A5yxnLfW0KghEeajjw"
const AppleYoutube = () => {
    const [videos, setVideos]= useState([]);
    useEffect (()=>{
        fetch (`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyAJZG1PvhhlU435lhZGEvI4jDdabvJnZoY`)
            .then(response=>{
                return response.json()
            }) .then(data=>{
                setVideos(data.items)
        

            })
    },[]); 
    console.log(videos);
    return ( 
    
        
            <div className="allVideosWrapper">
              <div className="container">
                <div className="row h-100 align-items-center justify-content-center text-center">
                  <div className="col-12">
                    <div className="title-wraper bold video-title-wrapper">
                      Latest Videos
                    </div>
                  </div>
                  {videos.map((singleVideo, i) => {
                    let vidId = singleVideo.id.videoId;
                    let vidLink = `https://www.youtube.com/watch?v=${vidId}`;
                    let videoWrapper = (
                      <div key={i} className="col-sm-12 col-md-4">
                        <div className="singleVideoWrapper">
                          <div className="videoThumbnail">
                            <a href={vidLink} target="_blank">
                              <img src={singleVideo.snippet.thumbnails.high.url} />
                            </a>
                          </div>
                          <div className="videoInfoWrapper">
                            <div className="videoTitle">
                              <a href={vidLink} target="_blank">
                                {singleVideo.snippet.title}
                              </a>
                            </div>
                            <div className="videoDesc">
                              {singleVideo.snippet.description}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                    return videoWrapper;
                  })}
      
                </div>
              </div>
            </div>
          );

    
}

export default AppleYoutube;
