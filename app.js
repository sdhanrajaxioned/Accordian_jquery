$(document).ready(function () {
    $('.accordian-item').click(function () {
        $(this).toggleClass('active');
        $('div.panel').slideUp();
        if ($(this).hasClass('active')) {
            $(this).siblings().removeClass('active');
            $(this).find('div.panel').slideDown();
        } else {
            $(this).find('div.panel').slideUp()
        }
    });
});
