$(document).ready(function() {
    $('#btn-next').click(function(event) {
        var slide_sau = $('.active').next();
        if (slide_sau.length != 0) {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        } else {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
        }
    });
});





$(document).ready(function() {
    $('#btn-next').click(function(event) {
        var slide_sau = $('.active').next();
        if (slide_sau.length != 0) {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            slide_sau.addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
            // xử lý nút 
            $('.nut-slide ul li').removeClass('active_nut');
            $('.nut-slide ul li:nth-child(' + (vi_tri_hien_tai + 1) + ')').addClass('active_nut');
        } else {
            $('.active').addClass('bien-mat-ben-trai').one('webkitAnimationEnd', function(event) {
                $('.bien-mat-ben-trai').removeClass('bien-mat-ben-trai').removeClass('active');
            });
            $('.slide:first-child').addClass('active').addClass('di-vao-ben-phai').one('webkitAnimationEnd', function(event) {
                $('.di-vao-ben-phai').removeClass('di-vao-ben-phai');
            });
            // xử lý nút 
            $('.nut-slide ul li').removeClass('active_nut');
            $('.nut-slide ul li:nth-child(1)').addClass('active_nut');
        }
    });
});

var autoLoad = setInterval(function() {
    $('#btn-next').trigger('click');
}, 3000);