'use-strict'

function renderGalleryImgs() {
    const images = getImages()
    const strHtml = images.map((img) => `<img src="${img}" class="meme-img" onclick="onImgSelect(${img})">`)
    document.querySelector('.meme-gallery').innerHTML = strHtml.join('')
}
