const accessKey = 'SX0J1npNbru3nNSIKnZ9jPiuAMArX_4Wzb3wWTx0yqw';  // Replace with your Unsplash API key

async function fetchImages(query) {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: { query, page: 5 },
      headers: {
        Authorization: `Client-ID ${accessKey}`
      }
    });

    if (response.data.results.length > 0) {
      // Assume you want to display the first image
      const indexToDisplay = 0; // Change this index to select a different image
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
  container.innerHTML = ''; // Clear any previous images
  
  const imgElement = document.createElement('img');
  imgElement.src = image.urls.small; // Use small size image for display
  imgElement.alt = image.description || 'Unsplash Image';
  container.appendChild(imgElement);
}

fetchImages('nail salon');