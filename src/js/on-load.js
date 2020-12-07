// const TimelineMax = require('TimelineMax');
import { TimelineMax } from 'gsap';

const canvas = document.getElementById('stage');
const overlay = document.getElementsByClassName('overlay')[0];
const hrOnLoad = document.getElementsByClassName('hr-on-load')[0];
const role = document.getElementsByClassName('role')[0];
const onLoad = document.getElementsByClassName('on-load')[0];
const firstAnimation = document.getElementsByClassName('first-animation')[0];
const meBaby = document.getElementsByClassName('me-baby')[0];
const about = document.getElementsByClassName('about')[0];
const hrAbout = document.getElementsByClassName('hr-about')[0];
const fullNameAbout = document.getElementsByClassName('full-name-about')[0];
const textAbout = document.getElementsByClassName('text-about')[0];
const homeLink = document.getElementsByClassName('home-link')[0];
const aboutLink = document.getElementsByClassName('about-link')[0];
const workLink = document.getElementsByClassName('work-link')[0];
const linkedin = document.getElementsByClassName('icon')[0];
const github = document.getElementsByClassName('icon')[1];
const pdf = document.getElementsByClassName('icon')[2];


let TL = new TimelineMax();

TL
    .fromTo(overlay, 2, {skewX: 80, scale: 2}, {skewX: 0, xPercent: 100, transformOrigin: '0% 100%', ease: Power4.easeOut })
    .fromTo(hrOnLoad, 1, {width: '0%'}, {width: '100%'}, "-=1.25")
    .fromTo(role, 1, {y: '-10', opacity: 0}, {y: '2', opacity: 1}, "-=1")
    .fromTo(onLoad, 1, {transform: 'translate(-50%, -50%)', opacity: 1}, {transform: 'translate(-50%, -80%)', opacity: 0})
    .fromTo(firstAnimation, 1, {}, {display: 'none'})
    .fromTo(canvas, 0, {display: 'none'}, { display: 'block'})
    .fromTo(meBaby, 1, {transform: 'translateX(-100%)', opacity: 0}, {transform: 'translateX(35%)', opacity: 1})
    .fromTo(about, 0, {opacity: 0}, {opacity: 1}, "-=1")
    .fromTo(hrAbout, 1, {width: '0%', opacity: 0}, {width: '70%', opacity: 1}, "-=1")
    .fromTo(fullNameAbout, 1, {y: 10, opacity: 0}, {y: 0, opacity: 1})
    .fromTo(textAbout, 1, {opacity: 0}, {opacity: 1}, "-=1")
    .fromTo(homeLink, 1, {opacity: 0}, {opacity: 1})
    .fromTo(aboutLink, 1, {opacity: 0}, {opacity: 1}, "-=1")
    .fromTo(workLink, 1, {opacity: 0}, {opacity: 1}, "-=1")
    .from(pdf, 0, {opacity: 0})
        .to(pdf, 0.5, { transform: 'translateY(-100%)', opacity: 1}, "-=1")
        .to(pdf, 0.5, { transform: 'translateY(0%)', opacity: 1}, "-=0.5")
    .from(github, 0, {opacity: 0})
        .to(github, 0.5, { transform: 'translateY(-100%)', opacity: 1})
        .to(github, 0.5, { transform: 'translateY(0%)', opacity: 1})
    .from(linkedin, 0, {opacity: 0})
        .to(linkedin, 0.5, { transform: 'translateY(-100%)', opacity: 1})
        .to(linkedin, 0.5, { transform: 'translateY(0%)', opacity: 1})
    
    