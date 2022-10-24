
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
    
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controls button');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    // change text for message in skills section
    function changeText(obj, text){
        obj.innerText = text;
    }
    // changeText();

    //***** below is the function for hamburger menu *****/

    const hamburgerMenu = document.querySelector('#menu-select')
    const menu = document.querySelector('#menu');
    let menuOpen = false;
    
    hamburgerMenu.addEventListener('click', function(event){
        
        const controls = document.querySelector('.controls');
        menuOpen = event.target.checked;
        
        if(menuOpen){
            menu.style.visibility = 'visible'
            controls.classList.add('controls-background')
        } else {
            menu.style.visibility = 'hidden'
            controls.classList.remove('controls-background')
        }
        
    });
    

    menu.addEventListener('click', function(event){

        const control = document.querySelector('.controls');
        console.log(event.target.textContent);  

        hamburgerMenu.checked = false;
        menu.style.visibility = 'hidden'
        control.classList.remove('controls-background');

    });
    // add event listener to menu ('click')
    // any clicks on buttons
    // event.target.textContent
    // use same logic for event listener, but on buttons - use bubble up so any element in menu runs the function 

    
    // TODO: reveal skill-icons when scrolling to section
    
    // const reveal = function(){
    //     let reveals = document.querySelectorAll('#skill-icons');
        
    //     for (let i = 0; i < reveals.length; i++) {
            
    //         let windowHeight = window.innerHeight;
    //         let revealTop = reveals[i].getBoundingClientRect().top;
    //         let revealPoint = 150;
            
    //         if( revealTop < windowHeight - revealPoint){
    //             reveals[i].classList.add('actives');
    //         } else {
    //             reveals[i].classList.remove('actives');
    //         }
            
    //     }
    // }
    
    // window.addEventListener('scroll', reveal);
    // reveal();

     
    //? Below initially used for page transitions - preferred the smooth scroll to adding 'active' section
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


// }); // everything inside the DOM ready callback, unless script tag down at end of <body> tag in HTML


