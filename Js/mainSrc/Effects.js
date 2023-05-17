/* Intersection observer */

window.addEventListener('DOMContentLoaded', setup); 

function setup() {
    const options = {
        rootMargin: '-50px 0px'
    }

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                return;
            }
        })
    }, options);

    const titles = document.querySelectorAll('.title');
    titles.forEach(title => observer.observe(title))


    const paras = document.querySelectorAll('.paras');
    paras.forEach(p => observer.observe(p));

}


