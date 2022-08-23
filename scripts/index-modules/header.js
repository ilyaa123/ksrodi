export const fixedHeader = (header, hero) => {
    const heigthHero = hero.scrollHeight;
    if (window.scrollY > heigthHero){
        header.classList.add('header-fixed')
    } else {
        header.classList.remove('header-fixed')
    }
    window.addEventListener('scroll', () => {
        if (window.scrollY > 90){
            header.classList.add('header__hidden');
        } else {
            header.classList.remove('header__hidden');
        }
        if (window.scrollY > heigthHero){
            header.classList.add('header-fixed')
        } else {
            header.classList.remove('header-fixed')
        }
    })
}
export const scrollHeader = (links) => {
    for (let link of links) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = link.getAttribute('href').substr(1)
        
        document.getElementById(blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      })
    }
}
export const mobileMenu = (button, mobile) => {
    button.addEventListener('click', () => {
        button.classList.toggle('header__mobile-btn-active');
        mobile.classList.toggle('header__mobile-active');
    });
    const links = mobile.querySelectorAll('.header-mobile__nav-link');
    links.forEach(link => {
        link.addEventListener('click', () => {
            button.classList.remove('header__mobile-btn-active');
            mobile.classList.remove('header__mobile-active');
        });
    });
}