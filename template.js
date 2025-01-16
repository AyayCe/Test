function getOverlayTemplate(index) {
    return `<div onclick="stopProp(event)" class="overlayDivBox">
    <div class="TitleAndDelete">
        <p>${photos[index]}</p>
        <img onclick="dnone()" src="./img/delete.png" alt="">
    </div>
    <img onclick="" class="mainPic" id="mainPic" src="img/${photos[index]}" alt="">
    <div class="arrowDiv">
        <img onclick="prevPic(${index})" class="prev" id="prev" src="./img/arrow.png" alt="">
        <p class="info" id="info"> </p>
        <img onclick="nextPic(${index})" class="next" id="next"  src="./img/right-arrow.png" alt="">
    </div>`
}

function getPicTemplate(index){
   return `<img onclick="showImg(${index})" src="img/${photos[index]}" />`
}