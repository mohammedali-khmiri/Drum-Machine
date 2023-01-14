let isOpen = false;
let volume = 0.75;

const kick = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/kick.WAV'],
  volume: volume });


const snare = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/snare.WAV'],
  volume: volume });


const closedHat = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/closed.WAV'],
  volume: volume });


const openHat = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/open.WAV'],
  volume: volume });


const hornOne = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/HORN1.wav'],
  volume: volume });


const hornTwo = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/HORN2.wav'],
  volume: volume });


const padOne = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/PAD1.wav'],
  volume: volume });


const padTwo = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/PAD2.wav'],
  volume: volume });


const blast = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/BLAST.wav'],
  volume: volume });


const closeSeven = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/ClosedHH%207Mile.wav'],
  volume: volume });


const clapSeven = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Clap%207Mile.wav'],
  volume: volume });


const bassSeven = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Bass%207Mile.wav'],
  volume: volume });


const chordOne = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord1.wav'],
  volume: volume });


const chordTwo = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/chord2.wav'],
  volume: volume });


const kickSeven = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Kick2.wav'],
  volume: volume });


const snareSeven = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/Snare%207Mile%201.wav'],
  volume: volume });


const lick = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/lick.wav'],
  volume: volume });


const openSeven = new Howl({
  src: ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/377560/OpenHH.wav'],
  volume: volume });



const sounds = [kick, snare, closedHat, hornTwo, hornOne, openHat, closeSeven, clapSeven, bassSeven, chordOne, chordTwo, kickSeven, snareSeven, lick, openSeven];

function changeVolume(value = undefined) {
  const volumeValue = isNaN(value) ? $('#slider').slider('value') / 100 : value;
  volume = volumeValue;
  sounds.forEach(sound => {
    sound._volume = volume;
  });
  $('.screen-info').html(`Vol: ${Math.round(volume * 100)}`);
}

$("#slider").slider({
  orientation: "horizontal",
  max: 100,
  value: 75,
  slide: changeVolume,
  change: changeVolume });


let padObject = {
  one: { 'sound': blast, name: 'Blast' },
  two: { 'sound': hornOne, name: 'Horn 1' },
  three: { 'sound': hornTwo, name: 'Horn 2' },
  four: { 'sound': padOne, name: 'Pad 1' },
  five: { 'sound': closedHat, name: 'HH' },
  six: { 'sound': padTwo, name: 'Pad 2' },
  seven: { 'sound': kick, name: 'Kick' },
  eight: { 'sound': snare, name: 'Snare' },
  nine: { 'sound': openHat, name: 'OHat' } };



const playSound = (pad, div) => {
  pad.sound.play();
  $('.screen-info').html(pad.name);
  div.addClass('pressed');
  setTimeout(() => {
    div.removeClass('pressed');
  }, 100);
};


$('.pad').click(e => {
  const id = e.target.id;
  playSound(padObject[id], $(`#${id}`));
});

$(document).keydown(e => {
  switch (e.which) {
    case 81:
      playSound(padObject.one, $('#one'));
      return;
    case 87:
      playSound(padObject.two, $('#two'));
      return;
    case 69:
      playSound(padObject.three, $('#three'));
      return;
    case 65:
      playSound(padObject.four, $('#four'));
      return;
    case 83:
      playSound(padObject.five, $('#five'));
      return;
    case 68:
      playSound(padObject.six, $('#six'));
      return;
    case 90:
      playSound(padObject.seven, $('#seven'));
      return;
    case 88:
      playSound(padObject.eight, $('#eight'));
      return;
    case 67:
      playSound(padObject.nine, $('#nine'));
      return;}

});

$('.bank-one').click(() => {
  $('.bank-one').addClass('active');
  $('.bank-two').removeClass('active');
  $('.screen-info').html('Dope Kit..');
  padObject = {
    one: { 'sound': blast, name: 'Blast' },
    two: { 'sound': hornOne, name: 'Horn 1' },
    three: { 'sound': hornTwo, name: 'Horn 2' },
    four: { 'sound': padOne, name: 'Pad 1' },
    five: { 'sound': closedHat, name: 'HH' },
    six: { 'sound': padTwo, name: 'Pad 2' },
    seven: { 'sound': kick, name: 'Kick' },
    eight: { 'sound': snare, name: 'Snare' },
    nine: { 'sound': openHat, name: 'OHat' } };

});

$('.bank-two').click(() => {
  $('.bank-two').addClass('active');
  $('.bank-one').removeClass('active');
  $('.screen-info').html('Sick Kit..');
  padObject = {
    one: { 'sound': chordOne, name: 'Chord 1' },
    two: { 'sound': chordTwo, name: 'Chord 2' },
    three: { 'sound': lick, name: 'Lick' },
    four: { 'sound': kick, name: 'Sub Kick' },
    five: { 'sound': closeSeven, name: 'HH' },
    six: { 'sound': clapSeven, name: 'Clap' },
    seven: { 'sound': kickSeven, name: 'Kick' },
    eight: { 'sound': snareSeven, name: 'Snare' },
    nine: { 'sound': openSeven, name: 'OHat' } };

});


//Timelinelite

$(document).ready(() => {
  const tl = new TimelineLite();
  tl.to('.on-button', 0.4, {
    opacity: 0,
    top: '0%' },
  'first +=0.2');
  tl.to('.pad', 0.3, {
    left: '-105%' },
  'poof');
  tl.to('.detail-strip', 0.4, {
    top: '-30%' },
  'poof');
  tl.from('.strap', 0.4, {
    height: '0%',
    ease: Power1.easeIn });

  tl.to('.top-plate', 0.3, {
    height: '100%',
    cursor: 'pointer' },
  'first');
  tl.to('.bottom-plate', 0, {
    display: 'none' },
  'first');
  tl.to('.sampler', 0.7, {
    transform: 'scale(0.6)',
    ease: Power2.easeOut },
  'first -=0.15');
  tl.to('.sampler', 0.1, {
    width: '17em',
    ease: Power1.easeNone },
  '+=0.25');
  tl.stop();

  $('.top-plate, .strap').click(() => {
    if (isOpen) {
      tl.reverse();
      changeVolume(0.75);
      isOpen = false;
    }
  });

  $('.on-button').click(() => {
    if (!isOpen) {
      tl.play();
      changeVolume(0);
      $('.screen-info').html('Goodbye..');
      isOpen = true;
    }
  });

  $('.sampler').hover(() => {
    if (isOpen) {
      $('.sampler').addClass('highlight');
    }
  });

  $('.sampler').mouseleave(() => {
    if (isOpen) {
      $('.sampler').removeClass('highlight');
    }
  });

  $('.sampler').click(() => {
    $('.sampler').removeClass('highlight');
  });
});