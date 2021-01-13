console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function() {
  fetchDogs();
  appendDogs();
  fetchBreeds();
  appendBreeds();
});

function fetchDogs() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  return fetch(imgUrl)
    .then(response => response.json())
    .then(results => {
      results.message.forEach(image => appendDogs(image)) //why is this not dogImage?
    }); // how did the second function know that this has been iterated over?
  }

function appendDogs(dogImage) {
  const dogImageContainer = document.querySelector('#dog-image-container');
  let newImageElement = document.createElement('img')
  newImageElement.src = dogImage;
  dogImageContainer.appendChild(newImageElement)
}

function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  return fetch(breedUrl)
    .then(response => response.json())
    .then(results => {
      results.message.forEach(breed => appendBreeds(breed))
    });
}

function appendBreeds(breedName) {
  const breedList = document.querySelector('dog-breeds')
  let newBreed = document.createElement('il')
  newBreed.innerHTML = breedName
  breedList.appendChild(newBreed)
}