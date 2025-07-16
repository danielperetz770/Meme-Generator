'use-strict'

// Global meme
var gMeme

const gElCanvas = document.querySelector('.main-editor-canvas')
const gCtx = gElCanvas.getContext('2d')

function getMeme() {

}


//Set which id selected
function setImage(imgId) {
    gMeme.selectedImgId = imgId
}

// Return Global Meme
function getMeme() {
    return gMeme
}

// Add new line text 
function addLine(text = 'Enter Meme Text') {
    if (gMeme.selectedLineIdx === 0) {
        gMeme.lines.push({
            txt: text,
            size: 20,
            color: 'blue',
            x: gElCanvas.width / 4,
            y: gElCanvas.height / 2,
            width: 250,
        })
    }
}