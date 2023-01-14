import { Player } from './player.js';

const play = document.querySelector('.play-control');
const pause = document.querySelector('.pause-control');
const nextMusic = document.querySelector('.next-control');
const previousMusic = document.querySelector('.previous-control');

const player = Player()

export function PlayerControls() {

  play.addEventListener('click', () => {
    player.play();
    play.classList.add('hide');
    pause.classList.remove('hide');
  });
  
  pause.addEventListener('click', () => {
    player.pause();
    play.classList.remove('hide');
    pause.classList.add('hide');
  });

  nextMusic.addEventListener('click', () => {
    player.next();
    play.classList.remove('hide');
    pause.classList.add('hide');
  });

  previousMusic.addEventListener('click', () => {
    player.previous();
    play.classList.remove('hide');
    pause.classList.add('hide');
  });

  player.setbar.addEventListener('input', () => {
    player.setBarProgress(setbar.value);
  });

  player.setbar.addEventListener('change', () => {
    player.setProgressBar(setbar.value);
  });
};
