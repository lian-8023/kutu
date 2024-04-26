$(function () {
    // 选项卡切换功能
    $("ul.nav-tab>li>a").click(function (e) {
        e.preventDefault();
        let showid = $(this).attr("href");
        $(showid).siblings().removeClass("active");
        $(showid).addClass("active");
        $(this).parent("li").siblings().removeClass("active");
        $(this).parent("li").addClass("active");
    })

    // 导航栏切换功能
    $(".header .sec-memu .box-nav .once").mouseenter(function () {
        let num = $(this).index()
        $(this).siblings('.once').removeClass('active')
        $(this).addClass('active')

        $('.header .sec-memu .box-content .box-pane').removeClass('active')
        $('.header .sec-memu .box-content .box-pane').eq(num).addClass('active')
    })

    $('.akicate').click(function () {
        $('.akicate').removeClass('active')
        let txt = $(this).attr('data-txt')
        $('.cate .cate-title span').html(txt)
        if ($('.hot-cate span[data-txt="' + txt + '"]').length) {
            $('.hot-cate span[data-txt="' + txt + '"]').addClass('active')
        } else {
            $('.hot-cate span').eq(0).addClass('active')
        }
    })

    // 节日轮播
    var swiper = new Swiper('.index-sec1 .swiper', {
        slidesPerView: "auto",
        spaceBetween: 16,
        slidesPerGroup: 5,
        // pagination: {
        //     el: '.swiper-pagination',
        //     clickable: true,
        // },
        navigation: {
            nextEl: '.index-sec1 .swiper-button-next',
            prevEl: '.index-sec1 .swiper-button-prev',
        },
    });

    function checkheader() {
        if ($(window).scrollTop() > 150) {
            $('.header').addClass('style2');
            $('.index-banner').addClass('style2');
        } else {
            $('.header').removeClass('style2');
            $('.index-banner').removeClass('style2');
        }
    }

    checkheader()

    // 导航栏模式切换
    $(window).scroll(function () {
        checkheader()
    });

})