function amp(){
  var volt = Number.parseInt(prompt("Hoeveel volt heb je?"));
  var ohm = Number.parseInt(prompt("Hoveeel weestand heb je?"));
  var amp = volt / ohm;

  const text = document.getElementById('amptext')
  text.innerHTML = 'Ampère: ' + amp
}

function ohm(){
  var volt = Number.parseInt(prompt("Hoeveel volt heb je?"));
  var amp = Number.parseInt(prompt("Hoveeel ampère heb je?"));
  var amp = volt / amp;

  const text = document.getElementById('ohmtext')
  text.innerHTML = 'Ampère: ' + amp
}

function volt(){
  var ohm = Number.parseInt(prompt("Hoveeel weestand heb je?"));
  var amp = Number.parseInt(prompt("Hoeveel amps heb je?"));
  var volt = ohm * amp;

  const text = document.getElementById('volttext')
  text.innerHTML = 'Volt: ' + volt
}

function volume(){
  var breedte = Number.parseInt(prompt("Wat is de breedte?"));
  var lengte = Number.parseInt(prompt("Wat is de lengte?"));
  var hoogte = Number.parseInt(prompt("Wat is de hoogte?"));

  var volume = lengte * breedte * hoogte;
  const text = document.getElementById('volumetext');
  text.innerHTML = 'Volume: ' + volume;
}

function dicht(){
  var massa = Number.parseInt(prompt("Wat is de massa?"));
  var volume = Number.parseInt(prompt("Wat is de volume?"));

  var dichtheid = massa / volume;
  const text = document.getElementById('dichttext');
  text.innerHTML = 'Dichtheid: ' + dichtheid;
}

function massa(){
  var dicht = Number.parseInt(prompt("Wat is de dichtheid?"));
  var volume = Number.parseInt(prompt("Wat is de volume?"));

  var dichtheid = dicht * volume;
  const text = document.getElementById('massatext');
  text.innerHTML = 'Massa: ' + dichtheid;
}

function volume2(){
  var massa = Number.parseInt(prompt("Wat is de massa?"));
  var dichtheid = Number.parseInt(prompt("Wat is de dichtheid?"));

  var volume = massa / dichtheid;
  const text = document.getElementById('volumetext');
  text.innerHTML = 'Volume: ' + volume;
}

function kilometer(){
  var ms = Number.parseInt(prompt("Hoeveel meter per seconde ga je?"));

  var kmh = ms * 3.6;
  const text = document.getElementById('kmhtext');
  text.innerHTML = 'Kilometer per uur: ' + kmh;
}

function mps(){
  var kmh = Number.parseInt(prompt("Hoeveel kilometer per uur ga je?"));

  var ms = kmh / 3.6;
  const text = document.getElementById('mpstext');
  text.innerHTML = 'Meter per seconde: ' + ms;
}
