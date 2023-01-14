import musics from './music.js';
import { pathFile, secondsToMinutes } from './utils.js';

const cover = document.querySelector('.card-img');
const title = document.querySelector('.card-content h1');
const artist = document.querySelector('.artist');
const currentDuration = document.querySelector('#current-duration');
const totalDuration = document.querySelector('#total-duration');
const setbar = document.querySelector('#setbar');

export function Player() {
  let audioData = musics;
  let currentTime = 0;
  let currentAudio = audioData[currentTime];
  let audio = new Audio(pathFile(currentAudio.file));
  
  creatingMusicCard();
  
  function creatingMusicCard() {
    cover.style.background = `url(${pathFile(currentAudio.cover)}) no-repeat center center / cover`
    title.innerText = currentAudio.title
    artist.innerText = currentAudio.artist
  };

  const next = () => {
    update()
    if(currentTime == audioData.length) {
      restart()
    };
  };

  const previous = () => {
    retry();
  };

  const update = () => {
    currentTime++
    currentAudio = audioData[currentTime];
    audio.pause();
    audio = new Audio(pathFile(currentAudio.file));
    creatingMusicCard();
  };

  const retry = () => {
    currentTime--
    currentAudio = audioData[currentTime];
    audio.pause();
    audio = new Audio(pathFile(currentAudio.file));
    creatingMusicCard();
  };
  
  
  const play = () => {
    setbar.max = audio.duration
    totalDuration.innerText = secondsToMinutes(audio.duration);
    audio.play();
    audio.addEventListener('timeupdate', () => {
      timeUpdate();
    });
  };

  const pause = () => {
    audio.pause(); 
  }

  const restart = () => {
    currentTime = 0;
    creatingMusicCard();
  };

  const setBarProgress = (value) => {
    audio.currentTime = value;
  };

  const timeUpdate = () => {
    currentDuration.innerText = secondsToMinutes(audio.currentTime);
    setbar.value = audio.currentTime;
  };

  return {
    next,
    play,
    pause,
    previous,
    timeUpdate,
    setBarProgress,
    audio,
    setbar,
    totalDuration,
    secondsToMinutes,
  }
};
