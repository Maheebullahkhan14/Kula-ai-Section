import React from 'react'
import Video1 from '../assets/Video1.mp4'
import Video2 from '../assets/Video2.mp4'
import Video3 from '../assets/Video3.mp4'


const VideoComp = () => {

  window.addEventListener('scroll' , function(){
    var VideoBox = document.querySelector('.Video-Box')
    var VideoBox2 = document.querySelector('.Video-Box2')
    var VideoBox3 = document.querySelector('.Video-Box3')
  
    VideoBox.classList.toggle('Video-BoxActive', window.scrollY > 690)
    VideoBox.classList.toggle('unActiveVideo1', window.scrollY > 950)
    
    VideoBox2.classList.toggle('Video-Box2Active', window.scrollY > 949)
    VideoBox2.classList.toggle('unActiveVideo2', window.scrollY > 1500)

    VideoBox3.classList.toggle('Video-Box3Active', window.scrollY > 1498)
    VideoBox3.classList.toggle('unActiveVideo3', window.scrollY > 1900)
    
    

  })



  
  return (
    <>
   <div className='Box'>
    <div className='Video-Box'>
        <video
          className='Video'
          style={{width: "800px", height : "700px"}}
          playsInline
          loop
          muted
          autoPlay
          
          alt="All the devices"
          src={Video1}
          
        />
        
        
    </div>
    <div className='Video-Box2'>
        <video
          className='Video'
          style={{width: "800px", height : "700px"}}
          playsInline
          loop
          muted
          autoPlay
          
          alt="All the devices"
          src={Video3}
          
        />
        
    </div>
    <div className='Video-Box3'>
        <video
          className='Video'
          style={{width: "800px", height : "700px"}}
          playsInline
          loop
          muted
          autoPlay
          
          alt="All the devices"
          src={Video2}
          
        />
        
    </div>
    </div>
   
    </>
  )
}

export default VideoComp;
