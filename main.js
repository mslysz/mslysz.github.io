// Form popup features

openForm = () => {
  document.getElementById('myForm').style.display = "block";
}

closeForm = () => {
  document.getElementById('myForm').style.display = "none";
}

// Set a constant variable, and create a new div element
const lightbox = document.createElement('div');
// Set the id attribute of the lightbox element to ‘lightbox’
lightbox.id = 'lightbox';
// Append the lightbox element to the end of the document body
document.body.appendChild(lightbox);
// Select all the image elements on the page and assigns them to the variable images.
const images = document.querySelectorAll('img');
images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active');
    const img = document.createElement('img');
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)

  })
})
// When clicked outside of an image element,
//  it removes the ‘active’ class from the lightbox.
lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active');
})