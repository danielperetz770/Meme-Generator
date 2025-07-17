'use-strict'

var gStartPos

function onInit() {
    renderGalleryImgs()
    renderStickers()
    initMeme()
    addListeners()
}


// Render the current clicked meme img on canvas
function renderMeme() {
    const meme = getMeme()
    const currImage = getCurrentImg(meme.selectedImgId)
    drawImage(currImage)
    // console.log(currImage);
    drawText(meme.lines)
}

// Render Stickers to the stickers container
function renderStickers() {
    const stickers = getStickers()
    const strHtml = stickers.map((sticker) => `<span onclick="onAddLine('${sticker}')">${sticker}</span>`)
    document.querySelector('.stickers-container').innerHTML = strHtml.join('')
    // console.log(document.querySelector('.stickers-container'));
}

// Change Text Color By User

function onChangeColor(elColor) {
    getColor(elColor)
    renderMeme()
}

// Change Font Size By User

function onChangeFontSize(plusOrMinus) {
    changeFontSize(plusOrMinus)
    renderMeme()
}

// change font type

function onChangeFont(font) {
    changeFont(font)
    renderMeme()
}

function onAddLine(text = '') {
    if (text) addLine(text)
    else addLine()
    renderMeme()
}

// Get user text input
function onUpdateTxt(elValue) {
    getText(elValue)
    renderMeme()
}

// Add remove line txt

function onRemoveLine() {
    removeLine()
    renderMeme()
}

// Move Line By User

function onMoveLine(plusOrMinus) {
    moveText(plusOrMinus)
    renderMeme()
}

// Switch bettwen text lines

function onSwitchLine() {
    switchLines()
    renderMeme()
}



// draw img on canvas
function drawImage(currImage) {
    const elImage = new Image()
    elImage.src = currImage.url
    gCtx.drawImage(elImage, 0, 0, gElCanvas.width, gElCanvas.height)
}

// Align text left

function onAlignTxtLeft() {
    alignTxtLeft()
    renderMeme()
}

// Align text right

function onAlignTxtRight() {
    alignTxtRight()
    renderMeme()
}

// Align text Center

function onAlignTxtCenter() {
    alignTxtCenter()
    renderMeme()
}

function onDown(ev) {
    //Get the ev pos from mouse or touch
    const pos = getEvPos(ev)
    const lineIdx = isTextClicked(pos)
    // console.log(lineIdx);
    if (lineIdx === -1) return
    setSelectedLine(lineIdx)
    setTextDrag(true)
    //Save the pos we start from 
    gStartPos = pos
    document.body.style.cursor = 'grabbing'
    renderMeme()
}

function getEvPos(ev) {

    //Gets the offset pos , the default pos
    var pos = {
        x: ev.offsetX,
        y: ev.offsetY
    }
    // Check if its a touch ev
    if (gTouchEvs.includes(ev.type)) {
        //soo we will not trigger the mouse ev
        ev.preventDefault()
        //Gets the first touch point
        ev = ev.changedTouches[0]
        //Calc the right pos according to the touch screen
        pos = {
            x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
            y: ev.pageY - ev.target.offsetTop - ev.target.clientTop
        }
    }
    return pos
}

function addMouseListeners() {
    gElCanvas.addEventListener('mousemove', onMove)
    gElCanvas.addEventListener('mousedown', onDown)
    gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
    gElCanvas.addEventListener('touchmove', onMove)
    gElCanvas.addEventListener('touchstart', onDown)
    gElCanvas.addEventListener('touchend', onUp)
}

//Handle the listeners
function addListeners() {
    addMouseListeners()
    addTouchListeners()
    //Listen for resize ev 
    window.addEventListener('resize', () => {
        // resizeCanvas()
        renderMeme()
    })
}