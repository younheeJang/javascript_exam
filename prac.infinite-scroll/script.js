//
const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let photosArray = [];

//unsplash api:
const count = 10;
const apiKey = ``;
const apiUrl = `https://api/.unsplash.com/photos/random/?client_id=${apiKey}$count=${count}`;

//helper setAttribute
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

//create element and add to dom
function displayPhotos() {
  photosArray.forEach(photo => {
    //create <a>
    const item = document.createElement('a');
    // item.setAttribute('href', photo.links.html);
    // item.setAttribute('target', '_blank');
    setAttributes(item, {
      href: photo.links.html,
      target: '_blank'
    });
    //create <img>
    const img = document.createElement('img');
    // img.setAttribute('src', photo.urls.regular);
    // img.setAttribute('alt', photo.alt_description);
    // img.setAttribute('title', photo.alt_description);
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description
    });

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

//on load
getPhotos();
