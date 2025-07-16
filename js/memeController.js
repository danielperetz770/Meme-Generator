'use-strict'


function onInit() {
    renderGalleryImgs()
    initMeme()
}


// Render the current clicked meme img on canvas
function renderMeme() {
    const meme = getMeme()
    const currImage = getCurrentImg(meme.selectedImgId)
    drawImage(currImage)
    // console.log(currImage);
}

function onChangeColor() {

}
function onChangeFontSize(text = '') {

}
function onAddLine(text = '') {
    addLine(text)
    renderMeme()
}
function onRemoveLine() {

}
function onMove() {

}
function onUp() {

}
function onMove() {

}

// draw img on canvas
function drawImage(currImage) {
    const elImage = new Image()
    elImage.src = currImage.url
    gCtx.drawImage(elImage, 0, 0, gElCanvas.width, gElCanvas.height)
}

