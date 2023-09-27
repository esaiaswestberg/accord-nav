import AccordNav from './../src/index.js'

const navElement = document.querySelector('#navigation')
const nav = new AccordNav.Navigation(navElement)

const section1 = new AccordNav.Section('Section 1')
nav.addSection(section1)
