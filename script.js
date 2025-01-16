let photos = [
    "ai-generated-8993116_1280.jpg",
    "elephants-7533479_1280.jpg",
    "great-wall-motor-8893216_1280.jpg",
    "heart-3940561_1280.jpg",
    "pattern-8798134_1280.png",
    "plant-7663910_1280.jpg",
    "real-estate-9265386_1280.jpg",
    "wild-horse-9057944_1280.jpg",
    "woman-7396948_1280.jpg"
];

function onLoad() {
    let contentRef = document.getElementById("picturesDiv");
    for (let index = 0; index < photos.length; index++) {
        contentRef.innerHTML += getPicTemplate(index);
    }
}

function dnone() {
    let x = document.getElementById("overlay");
    x.classList.toggle('d_none');
}

function stopProp(event) {
    event.stopPropagation(event);
}

function showImg(index) {
    let overlayRef = document.getElementById('overlay');
    overlayRef.classList.toggle('d_none');
    overlayRef.innerHTML = getOverlayTemplate(index);
}

function nextPic(index) {
    let overlayRef = document.getElementById('overlay');
    if (index < photos.length - 1) {
        index++;
    } else if (index = photos.length) {
        index = 0;
    }
    overlayRef.innerHTML = getOverlayTemplate(index);
}

function prevPic(index) {
    let overlayRef = document.getElementById('overlay');
    if (index == 0) {
        index = photos.length - 1;
    } else {
        index--;
    }
    overlayRef.innerHTML = getOverlayTemplate(index);
}
