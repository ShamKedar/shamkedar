const toggleBtn = document.getElementById('toggle-theme');

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