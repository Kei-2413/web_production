$(function(){
    // アコーディオンの一つ目を表示
    $('#child-1').css('display','block');
    // アコーディオン
    $('.faq__ac-parent').click(function(){
    $(this).next().slideToggle('fast');
    });

    // submit
    $('.alert').hide();
    $(document).ready(function () {

        const $submitBtn = $('#js-submit')
        $('#form input,#form textarea').on('change', function () {
            if (
                $('#form input[type="text"]').val() !== "" &&
                $('#form input[type="email"]').val() !== "" &&
                $('#form input[type="checkbox"]').val() !== "" &&
                $('#form #privacyCheck').prop('checked') === true
            ) {
            $submitBtn.prop('disabled', false);
            $('.alert').hide();
            } else {
            $submitBtn.prop('disabled', true);
            $('.alert').fadeIn();
            }
        });
    });

    // ハンバーガーメニュ-
    $('.white-mask').hide();
    $('#trigger').click(function(){
        $(this).toggleClass('close');
        $('.menu-list').toggleClass('slideIn');
        $('.white-mask').fadeToggle(200);
        $('body').toggleClass('noscroll');
    });

    $('.menu-list,.white-mask').click(function(){
        $('#trigger').removeClass('close');
        $('.menu-list').removeClass('slideIn');
        $('.white-mask').hide();
        $('body').removeClass('noscroll');
    });
    /*ページ内スクロール */
    $('a[href^="#"]').click(function(){
        var speed = 500;
        var headerHeight = 110
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top - headerHeight;
        $("html, body").animate({scrollTop:position}, speed, "swing");
    });
});
