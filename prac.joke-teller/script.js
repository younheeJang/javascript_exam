const button = document.getElementById('button');
const audioElement = document.getElementById('audio');

//disable enable button:
function toggleButton() {
  button.disabled = !button.disabled;
}

//passing joke to voicerss api:
function tellMe(joke) {
  console.log('tell me: ', joke);
  VoiceRSS.speech({
    key: 'your app key',
    src: joke,
    hl: 'en-us',
    v: 'Linda',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false
  });
}

//get jokes:
async function getJokes() {
  let joke = '';
  const apiUrl =
    'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data.setup) {
      joke = `${data.setup}...${data.delivery}`;
    } else {
      joke = data.joke;
    }
    tellMe(joke);
    toggleButton();
  } catch (error) {
    console.log(error);
  }
}

//event listeners:
button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
