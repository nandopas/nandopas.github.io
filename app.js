const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');


    //toggle nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //animate links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .2}s`;
            }
            
        });

        //burger animation
        burger.classList.toggle('toggle');
    });
}

const cardHover = () => {
    const cards = document.querySelectorAll('.card-container div.card');

    cards.forEach((card, index) => {

        const hover = card.querySelector('.card-hover-text');

        card.addEventListener('mouseenter', () => {
            console.log(`hover: ${index}`);
            card.style.zIndex = "10"
            hover.style.display = "block";
        })
        card.addEventListener('mouseleave', () => {
            card.style.zIndex = "";
            hover.style.display = "none";
        })
    })
}


navSlide();
cardHover();



console.log('ready');