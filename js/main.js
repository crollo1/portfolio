
// window.addEventListener('DOMContentLoaded', (event) => {
//     console.log('DOM fully loaded and parsed');
    
    const sections = document.querySelectorAll('.section');
    const sectBtns = document.querySelectorAll('.controls button');
    const sectBtn = document.querySelectorAll('.control');
    const allSections = document.querySelector('.main-content');

    
    function PageTransitions(){
    
        // active class button click 
        for(let i = 0; i < sectBtn.length; i++){

            sectBtn[i].addEventListener('click', function(){
                
                let currentBtn = document.querySelectorAll('.active-btn');
                currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
                this.className += ' active-btn';
    
            })
        
        }

        // sections Active class
        allSections.addEventListener('click', (e) =>{
            // console.log(e.target);
            const id = e.target.dataset.id;

            if(id){
                // remove selected from other btns
                sectBtns.forEach(( btn ) => {
                    btn.classList.remove('active')
                })
                e.target.classList.add('active')

                // hide other sections
                sections.forEach(( section ) => {
                    section.classList.remove('active')
                })

                const element = document.getElementById(id);
                element.classList.add('active');
            }

        })
        
    
    }
   
    PageTransitions();

// }); // everything inside the DOM ready callback, unless script tag down at end of <body> tag in HTML

