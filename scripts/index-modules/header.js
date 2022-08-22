export const fixedHeader = (header, hero) => {
    const heigthHero = hero.scrollHeight;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 90){
            header.style.opacity = '0';
            header.style.transform = 'translateY(-90px)';
        } else {
            header.style.transform = 'translateY(0)';
            header.style.opacity = '';
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