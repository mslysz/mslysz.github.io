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

const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'In November 2022 I decided that I needed to change something in my professional life, my choice was to become a programmer. I had long been interested in creating simple, basic websites.My choice was to learn how to create websites and web applications.I started with online courses, from YouTube, Udemy.I am currently doing a Software developer course at the Pitman School based in Edinburgh.I am trying to progress as quickly as possible and get the best knowledge possible.In the near future I want to get employed as a Front - End - Developer.'

let indexText = 0;
const time = 40;

const addLetter = () => {
  spnText.textContent += txt[indexText];
  indexText++;
  if (indexText == txt.length) clearInterval(indexTyping);
}

const cursorAnimation = () => {
  spnCursor.classList.toggle('active')
}

const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400);