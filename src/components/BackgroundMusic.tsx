import React, { useRef, useState } from 'react';
import BGM from "@/assets/video/bgm.mp3";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    console.log("Play button clicked"); // 버튼 클릭 확인
    if (audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((error) => {
        console.error('Error attempting to play audio:', error);
      });
    }
  };

  const handlePause = () => {
    console.log("Pause button clicked"); // 버튼 클릭 확인
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className='bgm-btn'>
      <audio ref={audioRef} loop>
        <source src={BGM} type="audio/mpeg" />
      </audio>
      {!isPlaying ? (
        <button onClick={handlePlay}><span>🔊</span></button>
      ) : (
        <button onClick={handlePause}><span className='pause'>🔇</span></button>
      )}
    </div>
  );
};

export default BackgroundMusic;
