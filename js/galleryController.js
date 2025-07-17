'use strict'

// render imgs on board
function renderGalleryImgs() {
    const images = getImages()
    const strHtml = images.map((img) => `<img src="${img.url}" class="meme-img" onclick="onImgSelect(${img.id})">`)
    document.querySelector('.meme-gallery').innerHTML = strHtml.join('')
}

// when img selected enter the meme creator
function onImgSelect(imgId) {
    setImage(imgId)
    document.querySelector('.meme-editor-container').style.display = 'flex'
    document.querySelector('.meme-gallery').style.display = 'none'
    document.querySelector('.canvas-container').style.display = 'flex'
    document.querySelector('.filter-by-search-by').style.display = 'none'  // טיפול בתצוגת הפילטר
    renderMeme()
}

// Get Back to homepage //Gallery
function onReturnToGallery() {
    document.querySelector('.meme-gallery').style.display = 'grid'
    document.querySelector('.meme-editor-container').style.display = 'none'
    document.querySelector('.gallery-container').style.backgroundColor = 'var(--clr-primary-base-1)'
    document.querySelector('.upload-container').style.display = 'none'
    document.querySelector('.meme-text').value = ''
    document.querySelector('.filter-by-search-by').style.display = 'flex'  // מחזיר להציג את הפילטר
    initMeme()
}

// Toggle Menu
function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}
