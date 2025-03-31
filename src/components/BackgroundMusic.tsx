import React, { useRef, useState } from 'react';
import Play from "@/assets/icons/play.png";
import Stop from "@/assets/icons/stop.png";
import BGM from "@/assets/video/bgm.mp3";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Error attempting to play audio:', error);
      });
    }
  };

  const handlePause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='bgm-btn'>
      <audio 
        ref={audioRef}
        loop
        onPlay={() => setIsPlaying(true)} 
        onPause={() => setIsPlaying(false)}
      >
        <source src={BGM} type="audio/mpeg" />
      </audio>
      {!isPlaying ? (
        <button onClick={handlePlay}>
          <span>
            <img src={Play} alt='재생' />
          </span>
        </button>
      ) : (
        <button onClick={handlePause}>
          <span className='pause'>
            <img src={Stop} alt='정지' />
          </span>
        </button>
      )}
    </div>
  );
};

export default BackgroundMusic;
