'use-strict'

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
    renderMeme()
}