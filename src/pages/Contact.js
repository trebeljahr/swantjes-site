import React from 'react';
import contactAnimation from '../assets/cropped/about_small.mp4';
const Contact = () => {
    return (
        <div className="fullScreen topLeft">
            <video
                autoPlay="autoplay"
                muted
                loop
                src={contactAnimation}
                defaultPlaybackRate={0.25}
                className="fullScreenVideo"
            ></video>
        </div>
    );
};

export default Contact;
