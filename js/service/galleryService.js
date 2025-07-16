'use-strict'

var gImgs = [
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
]


function initMeme() {
    gMeme = {
        selectedImgId: 5,
        selectedLineIdx: 0,
        lines: [
            {
                txt: 'I sometimes eat Falafel',
                size: 20,
                color: 'red'
            },
        ],
    }
}

var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

// find the clicked img id
function getCurrentImg(imgId) {
    return gImgs.find((img) => img.id === imgId)
}

// get images array
function getImages() {
    return gImgs
}