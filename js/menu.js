const menu = document.querySelector('.nav-icon');
const menuOverlay = document.querySelector('.nav-overlay');

menu.addEventListener('click', function() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
});

$("a.btn-scroll").click(function(event){
    event.preventDefault();
    var id = $(this).attr('href'),
    targetOffset = $(id).offset().top;

    $("html, body").animate({ 
        scrollTop: targetOffset 
    }, 650);
});
