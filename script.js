// home
const bgAnimation = document.getElementById ('bgAnimation')
const backgroundAnim = document.getElementById ('backgroundAnim')

const numberOfColorBoxes = 400

for (let index = 0; index < numberOfColorBoxes; index++) {
    const colorBox = document.createElement
    ('div')
    colorBox.classList.add('colorBox')
    bgAnimation.append(colorBox)
}

//aboutme
const aboutContainerEl = document.getElementById('aboutContainer')


// function timedRefresh(timeoutPeriod) {
// 	setTimeout("location.reload(true);",timeoutPeriod);
// }
// window.onload = timedRefresh(6000);