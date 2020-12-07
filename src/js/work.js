workLink = document.querySelector('.work-link')
console.log(workLink)

workLink.addEventListener('click', function() {

    const canvas = document.getElementById('stage');
    const content = document.querySelector('.content');
    const workContent = document.querySelector('.work-content');

    let TL = new TimelineMax();
    TL
    .fromTo(canvas, 2, {}, {transform: 'translateY(-100%)'})
    .fromTo(content, 2, {}, {transform: 'translateY(-100%)'}, "=-2")
    .fromTo(workContent, 2, {}, {transform: 'translateY(-100%)'}, "=-2")
});