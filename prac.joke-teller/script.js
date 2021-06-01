//
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];
let initialLoad = true;
//unsplash api:
const count = 5;
const apiKey = ``;
let apiUrl = `https://api/.unsplash.com/photos/random/?client_id=${apiKey}$count=${count}`;

//check if all images were loaded:
function imageLoaded() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
    count = 30;
  }
}

//helper setAttribute
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//create element and add to dom
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;

  photosArray.forEach(photo => {
    //create <a>
    const item = document.createElement('a');

    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    });
    //create <img>
    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

    //check when each is finished loading:
    img.addEventListener('load', imageLoaded);
    //put img -> a
    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

//get photos from unsplash api:
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const photosArray = await response.json();
  } catch (err) {}
}

//scroll near bottom, load more photos:
window.addEventListener('scroll', () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhotos();
  }
});

//on load
getPhotos();
