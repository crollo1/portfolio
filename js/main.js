
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
    
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controls button');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    
    // function PageTransitions(){

    //     // sections Active class
    //     allSections.addEventListener('click', (e) =>{
    //         // console.log(e.target);
    //         const id = e.target.dataset.id;

    //         if(id){
    //             // remove selected from other btns
    //             sectBtns.forEach(( btn ) => {
    //                 btn.classList.remove('active')
    //             })
    //             e.target.classList.add('active')

    //             // hide other sections
    //             sections.forEach(( section ) => {
    //                 section.classList.remove('active')
    //             })

    //             const element = document.getElementById(id);
    //             element.classList.add('active');
    //         }

    //     })
    
    // }
   
    // PageTransitions();

    // change text for message in skills section
    function changeText(obj, text){
        obj.innerText = text;
    }

    // changeText();

    // reveal skill-icons when scrolling to section
    
    const reveal = function(){
        let reveals = document.querySelectorAll('#skill-icons');
        
        for (let i = 0; i < reveals.length; i++) {
            
            let windowHeight = window.innerHeight;
            let revealTop = reveals[i].getBoundingClientRect().top;
            let revealPoint = 150;
            
            if( revealTop < windowHeight - revealPoint){
                reveals[i].classList.add('actives');
            } else {
                reveals[i].classList.remove('actives');
            }
            
        }
    }
    
    window.addEventListener('scroll', reveal);
    reveal();

    const hamburgerMenu = document.querySelector('#menu-select')

    hamburgerMenu.addEventListener('click', function(event){
            
        const menuOpen = event.target.checked;
        const menu = document.querySelector('#menu')
        if(menuOpen){
            menu.style.visibility = 'visible'
        } else {
            menu.style.visibility = 'hidden'
        }
        
    });
// }); // everything inside the DOM ready callback, unless script tag down at end of <body> tag in HTML



