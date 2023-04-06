let lastScrollTop = 0
const navBarScroolingEffet = document.querySelector('#navBarScroolingEffet');
const hamburg = document.querySelector('#hamburg');
const navMoabail = document.querySelector('.nav-bar-mobail');
let show = false;
window.addEventListener('scroll', function (e) {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop < 100) {
        if (scrollTop > lastScrollTop) {
            navBarScroolingEffet.style.backgroundColor = "black";
            navBarScroolingEffet.style.zIndex = "1";
        }
        else {
            if (scrollTop < 100) {
                console.log(213)
                navBarScroolingEffet.style.backgroundColor = "transparent";
                navBarScroolingEffet.style.zIndex = "1";
            }
        }
        lastScrollTop = scrollTop;
    }
})

hamburg.addEventListener('click', () => {
    show = !show;
    console.log(show)
    if (show) {
        hamburg.style.color = 'white'
        navMoabail.classList.add("hamburgShow");
    } else {
        hamburg.style.color = '#e3051a'
        navMoabail.classList.remove("hamburgShow");
    }
})


const swiper = new Swiper('.swiper', {

    direction: 'horizontal',
    effect: "fade",
    loop: true,

    pagination: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },


    scrollbar: false
});
