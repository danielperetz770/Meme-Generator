'use strict'

var gFilterBy = ''

// render imgs on board
function renderGalleryImgs() {
  const images = getImages()
  const filteredImages = images.filter(img =>
    img.keywords.some(keyword =>
      keyword.toLowerCase().includes(gFilterBy.toLowerCase())
    )
  )

  const strHtml = filteredImages.map(
    (img) => `<img src="${img.url}" class="meme-img" onclick="onImgSelect(${img.id})">`
  )
  document.querySelector('.meme-gallery').innerHTML = strHtml.join('')
}



// when img selected enter the meme creator
function onImgSelect(imgId) {
  setImage(imgId)
  document.querySelector('.meme-editor-container').style.display = 'flex'
  document.querySelector('.meme-gallery').style.display = 'none'
  document.querySelector('.canvas-container').style.display = 'flex'
  document.querySelector('.filter-by-search-by').style.display = 'none'
  renderMeme()
}


// Get Back to homepage //Gallery
function onReturnToGallery() {
  document.querySelector('.meme-gallery').style.display = 'grid'
  document.querySelector('.meme-editor-container').style.display = 'none'
  document.querySelector('.filter-by-search-by').style.display = 'flex'
  document.querySelector('.gallery-container').style.backgroundColor = '#383b42'
  document.querySelector('.upload-container').style.display = 'none'
  document.querySelector('.meme-text').value = ''
  initMeme()
}


// Toggle Menu
function onToggleMenu() {
  document.body.classList.toggle('menu-open')
}

function onSetFilterBy(elInput) {
  gFilterBy = elInput.value
  renderGalleryImgs()
}

function onResetFilter() {
  gFilterBy = ''
  renderGalleryImgs()

  // clean the input
  const elTitle = document.querySelector('.search-input')
  elTitle.value = ''
}




