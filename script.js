/*const toggleBtn = document.getElementById('toggle-theme');

// Apply stored theme on load
document.documentElement.setAttribute('data-theme', localStorage.getItem('theme') || 'light');

toggleBtn.addEventListener('click', () => {
    let newTheme = document.documentElement.getAttribute('data-theme') === 'blue' ? 'light' : 'blue';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
});

/* NOT WORKING
$(function(){
    var $page = jQuery.url.attr("file");
    $('.navbar ul li a').each(function(){
        var $href = $(this).attr('href');
        if ( ($href == $page) || ($href == '') ) {
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
    });
});
*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.addEventListener('scroll', () => {

    let currentSection = '';

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {

        link.classList.remove('active');

        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });

});