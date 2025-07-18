'use strict'

// global variables
var gIsDownload = false
const gStickers = [
  '🤢', '👻', '💣', '❤️', '😏', '😘', '🙄'
]

// Global Canvas and context
const gElCanvas = document.querySelector('.main-editor-canvas')
const gCtx = gElCanvas.getContext('2d')

// Global meme
var gMeme


//Check if the click is inside the text
function isTextClicked(clickedPos) {
  let lineIdx = gMeme.lines.findIndex(line => {
    const lineArea = getLineArea(line)
    // console.log(lineArea);
    // console.log(clickedPos);
    // console.log(line);
    return lineArea.x < clickedPos.x &&
      lineArea.x + lineArea.width > clickedPos.x
      && lineArea.y > clickedPos.y && lineArea.y - lineArea.height < clickedPos.y
  })
  return lineIdx
}



function getLineArea(line) {
  if (!gMeme.lines.length) return;
  return {
    x: line.x - 3,
    y: line.y,
    width: line.width + 5,
    height: line.size + 3,
  };
}



function setSelectedLine(lineIdx) {
  const line = gMeme.lines.splice(lineIdx, 1)[0]
  gMeme.lines.push(line)
}


function setTextDrag(isDrag) {
  const line = gMeme.lines[memeIdx()]
  line.isDrag = isDrag
  // console.log(line)
}

function moveText(dx, dy) {
  gStartPos.x += dx
  gStartPos.y += dy
}


function getCurrLine() {
  return gMeme.lines[memeIdx()]
}


//Set which id selected
function setImage(imgId) {
  gMeme.selectedImgId = imgId
}

// Return Global Meme
function getMeme() {
  return gMeme
}

// Get Stickers Array
function getStickers() {
  return gStickers
}

// Draw the text
function drawText(userTxt) {
  for (let i = 0; i <= gMeme.selectedLineIdx; i++) {
    gCtx.lineWidth = 2
    gCtx.font = `${userTxt[i].size}px ${userTxt[i].font}`
    gCtx.fillStyle = userTxt[i].color
    gCtx.strokeStyle = 'black'
    gCtx.fillText(userTxt[i].txt, userTxt[i].x, userTxt[i].y)
    gCtx.strokeText(userTxt[i].txt, userTxt[i].x, userTxt[i].y)
  }
  if (!gIsDownload) drawSquareOutline(gMeme.lines[memeIdx()])
}


// draw Square outline
function drawSquareOutline(userTxt) {
  let textWidth = gCtx.measureText(userTxt.txt).width
  let x = userTxt.x
  let y = userTxt.y
  gCtx.beginPath();
  gCtx.rect(x - 10, y + 10, textWidth + 20, -userTxt.size - 10)
  gCtx.strokeStyle = 'green'
  gCtx.stroke()
}



// Get meme line index
function memeIdx() {
  return gMeme.selectedLineIdx
}

// Get meme text
function getText(text) {
  gMeme.lines[memeIdx()].txt = text
}

// Get meme text Color
function getColor(color) {
  gMeme.lines[memeIdx()].color = color
}


// Get meme text font size and changes depends on user click
function changeFontSize(plusOrMinus) {
  gMeme.lines[memeIdx()].size += 5 * plusOrMinus
}

// Get meme line text and changes depends on user click
function moveText(plusOrMinus) {
  gMeme.lines[memeIdx()].y += 25 * plusOrMinus
}

// Align meme text to left side

function alignTxtLeft() {
  gMeme.lines[memeIdx()].x = gElCanvas.width / 20
}


// Align meme text to right side
function alignTxtRight() {
  gMeme.lines[memeIdx()].x = gElCanvas.width / 2
}


// Align meme text to center
function alignTxtCenter() {
  gMeme.lines[memeIdx()].x = gElCanvas.width / 4
}


// Change font depends on user select
function changeFont(font) {
  gMeme.lines[memeIdx()].font = font
}

// Add new line text up / emoji up to 10 times 
function addLine(text = 'Enter Meme Text') {
  if (gMeme.selectedLineIdx === 10) return
  if (gMeme.selectedLineIdx === 0) {
    gMeme.lines.push({
      txt: text,
      size: 35,
      color: 'white',
      font: 'Impact',
      x: gElCanvas.width / 4,
      y: gElCanvas.height / 2,
      width: 250,
      isDrag: false,
    })

  }
  else if (gMeme.selectedLineIdx === 1) {
    gMeme.lines.push({
      txt: text,
      size: 35,
      color: 'white',
      font: 'Impact',
      x: gElCanvas.width / 4,
      y: gElCanvas.height / 1.1,
      width: 250,
      isDrag: false,
    })

  }
  else {
    let y = gMeme.lines[memeIdx()].y + 50
    if (y > gElCanvas.height) y = 0
    gMeme.lines.push({
      txt: text,
      size: 35,
      color: 'white',
      font: 'Impact',
      x: gElCanvas.width / 4,
      y,
      width: 250,
      isDrag: false,
    })
  }
  gMeme.selectedLineIdx++
}


// Remove Text Line
function removeLine() {
  if (gMeme.selectedLineIdx === 0) return
  gMeme.selectedLineIdx--
  gMeme.lines.pop()
}


// Switch text lines
function switchLines() {
  _rotateAnArrayByOne(gMeme.lines, gMeme.lines.length)
  // console.log(gMeme.selectedLineIdx)
}


//Sequential for loop
function _rotateAnArrayByOne(array, arrayLength) {
  var idx = array[arrayLength - 1],
    i
  for (i = arrayLength - 1; i > 0; i--) array[i] = array[i - 1]
  array[0] = idx
  // console.log(array[0])
}

