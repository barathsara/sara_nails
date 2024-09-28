const accessKey = 'SX0J1npNbru3nNSIKnZ9jPiuAMArX_4Wzb3wWTx0yqw';

async function fetchImages(query) {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query, page: 5 },
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    });

    if (response.data.results.length > 0) {
      const indexToDisplay = 0;
      displayImage(response.data.results[indexToDisplay]);
    } else {
      console.log('No images found for the given query.');
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }
}


function displayImage(image) {
  const container = document.getElementById('image-api');
  container.innerHTML = '';
  
  const imgElement = document.createElement('img');
  imgElement.src = image.urls.small;
  imgElement.alt = image.description || 'Unsplash Image';
  container.appendChild(imgElement);
}

fetchImages('nail salon');


//legördülő navbar

const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
