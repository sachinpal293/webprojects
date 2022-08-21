// change navbar styles on scroll
window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY>0)
})

// show and hide scroll
const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq=>{
    faq.addEventListener('click',() =>
    {
        faq.classList.toggle('open');
    })

    // Change icon 
    const icon = faq.querySelector('.faq_icon');
    if(icon.className == 'uil uil-plus')
    {
        icon.className = "uil uil-minus"
    }
})