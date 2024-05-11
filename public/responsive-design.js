
document.querySelector('.section-1').addEventListener('click', ()=>{
    document.querySelector('.grid-container').style.gridTemplateAreas =  '"section1 section1" "section2 section3" "section4 section5"' ;

    document.querySelector('.section-2').style.height = '100px';
    document.querySelector('.section-3').style.height = '100px';

    document.querySelector('.section-4').style.height = '100px';
    document.querySelector('.section-5').style.height = '100px';

    document.querySelector('.section-1').style.height = '100vh';
    document.querySelector('.section-1').style.width = 'auto';


});

document.querySelector('.section-2').addEventListener('click', ()=>{
    document.querySelector('.grid-container').style.gridTemplateAreas =  '"section2 section2" "section1 section3" "section4 section5"' ;

    document.querySelector('.section-1').style.height = '100px';
    document.querySelector('.section-3').style.height = '100px';

    document.querySelector('.section-4').style.height = '100px';
    document.querySelector('.section-5').style.height = '100px';

    document.querySelector('.section-2').style.height = '100vh';
    document.querySelector('.section-2').style.width = 'auto';


});

document.querySelector('.section-3').addEventListener('click', ()=>{
    document.querySelector('.grid-container').style.gridTemplateAreas =  '"section1 section2" "section3 section3" "section4 section5"' ;

    document.querySelector('.section-1').style.height = '100px';
    document.querySelector('.section-2').style.height = '100px';

    document.querySelector('.section-4').style.height = '100px';
    document.querySelector('.section-5').style.height = '100px';

    document.querySelector('.section-3').style.height = '100vh';
    document.querySelector('.section-3').style.width = 'auto';


});

document.querySelector('.section-4').addEventListener('click', ()=>{
    document.querySelector('.grid-container').style.gridTemplateAreas =  '"section1 section2" "section3 section5" "section4 section4"' ;

    document.querySelector('.section-1').style.height = '100px';
    document.querySelector('.section-2').style.height = '100px';

    document.querySelector('.section-3').style.height = '100px';
    document.querySelector('.section-5').style.height = '100px';

    document.querySelector('.section-4').style.height = '100vh';
    document.querySelector('.section-4').style.width = 'auto';


});

document.querySelector('.section-5').addEventListener('click', ()=>{
    document.querySelector('.grid-container').style.gridTemplateAreas =  '"section1 section2" "section3 section4" "section5 section5"' ;

    document.querySelector('.section-1').style.height = '100px';
    document.querySelector('.section-2').style.height = '100px';

    document.querySelector('.section-3').style.height = '100px';
    document.querySelector('.section-4').style.height = '100px';

    document.querySelector('.section-5').style.height = '100vh';
    document.querySelector('.section-5').style.width = 'auto';


});

// Default State 
document.querySelector('body').addEventListener('click', ()=>{

})