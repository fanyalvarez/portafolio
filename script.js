const bgAnimation = document.getElementById ('bgAnimation')
const backgroundAnim = document.getElementById ('backgroundAnim')

const numberOfColorBoxes = 400

for (let index = 0; index < numberOfColorBoxes; index++) {
    const colorBox = document.createElement
    ('div')
    colorBox.classList.add('colorBox')
    bgAnimation.append(colorBox)
}