import React from 'react'

const MusicPlayer = () => {
  return (
    <div>MusicPlayer</div>
  )
}

export default MusicPlayer

// import { useState, useEffect } from "react";

// const MusicPlayer = () => {
//   const [songs, setSongs] = useState([]);
//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [audioPlayer, setAudioPlayer] = useState<HTMLAudioElement>();

//   useEffect(() => {
//     const loadSongs = async () => {
//       const res = await fetch("/api/music");
//       const data = await res.json();
//       setSongs(data.songs);
//     };
//     loadSongs();
//   }, []);

//   const playSong = async () => {
//     if (!audioPlayer) return;
//     audioPlayer.play();
//   };

//   const pauseSong = async () => {
//     if (!audioPlayer) return;
//     audioPlayer.pause();
//   };

//   const handleSongClick = async (index: number) => {
//     setCurrentSongIndex(index);
//   };

//   useEffect(() => {
//     if (!songs[currentSongIndex]) return;
//     const loadAudioPlayer = async () => {
//       const { default: ytdl } = await import("ytdl-core-discord");
//       const { default: prism } = await import("prism-media");
//       const stream = ytdl(songs[currentSongIndex].url, {
//         filter: "audioonly",
//         quality: "highestaudio",
//       });
//       const decoder = new prism.FFmpeg({
//         args: ["-analyzeduration", "0", "-loglevel", "0", "-f", "s16le", "-ar", "48000", "-ac", "2"],
//       });
//       const audioStream = stream.pipe(decoder);
//       const audio = new Audio();
//       audio.srcObject = new MediaStream([audioStream]);
//       audio.addEventListener("ended", () => {
//         if (currentSongIndex + 1 < songs.length) {
//           setCurrentSongIndex((prevIndex) => prevIndex + 1);
//         }
//       });
//       setAudioPlayer(audio);
//     };
//     loadAudioPlayer();
//   }, [songs, currentSongIndex]);

//   useEffect(() => {
//     if (!audioPlayer) return;
//     playSong();
//     return () => pauseSong();
//   }, [audioPlayer]);

//   return (
//     <div>
//       {songs.map((song, index) => (
//         <div key={index} onClick={() => handleSongClick(index)}>
//           {song.title}
//         </div>
//       ))}
//       {audioPlayer && (
//         <div>
//           <button onClick={pauseSong}>Pause</button>
//           <button onClick={playSong}>Play</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MusicPlayer;
