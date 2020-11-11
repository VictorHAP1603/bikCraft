function menuScroll() {
    const sections = document.querySelectorAll('section')
    const li = document.querySelectorAll('.header_menu ul li a')
    const windowTop = window.pageYOffset + 92;

    if (windowTop > sections[0].offsetTop) {
        li[0].classList.add('active');
    } else {
        li[0].classList.remove('active');
    }
        

    if (windowTop > sections[1].offsetTop) {
        for(let i = 0; i < li.length; i++) {
            li[i].classList.remove('active')
        }
        li[1].classList.add('active')
    } else {
        li[1].classList.remove('active')
    }


    if (windowTop > sections[2].offsetTop) {
        for(let i = 0; i < li.length; i++) {
            li[i].classList.remove('active')
        }
        li[2].classList.add('active')
    } else {
        li[2].classList.remove('active')
    }


    if (windowTop > sections[3].offsetTop) {
        for(let i = 0; i < li.length; i++) {
            li[i].classList.remove('active')
        }
        li[3].classList.add('active')
    } else {
        li[3].classList.remove('active')
    }

}

menuScroll();

addEventListener('scroll', menuScroll)