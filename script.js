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

//nav
const nav = document.querySelector('.nav')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 950) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}

//aboutme

// function actualizar(){
//     location.reload(true)
// }
// setInterval("actualizar()",4000);


// function timedRefresh(timeoutPeriod) {
// 	setTimeout("location.reload(true);",timeoutPeriod);
// }
// window.onload = timedRefresh(6000);



// funcion subtitle
const textAboutEl = document.getElementById('textAbout')
const textSkillsEl = document.getElementById('textSkills')
const textProjectsEl = document.getElementById('textProjects')
const textContactEl = document.getElementById('textContact')
const textAbout = 'Sobre mi '
const textSkills = 'Skills'
const textProjects = 'Proyectos'
const textContact = 'Contacto'

let idx = 0

writeText()

function writeText() {
    textAboutEl.innerText = textAbout.slice(0, idx)
    textSkillsEl.innerText = textSkills.slice(0, idx)
    textProjectsEl.innerText = textProjects.slice(0, idx)
    textContactEl.innerText = textContact.slice(0, idx)

    idx++

    if (idx > 13) {
        idx = 1
    }
    setTimeout(writeText, 150)
}

