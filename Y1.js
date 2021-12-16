$(document).ready(function(){

    $('.next').click(function(){
const now_img = $('.show');
const next_img = now_img.next();
if(next_img.length){
now_img.removeClass('show');
next_image.addClass('show');
}

    });

    $('.prev').click(function(){
        const now_img = $('.show');
        const prev_img = now_img.prev();
        if(prev_img.length){
        now_img.removeClass('show');
        prev_image.addClass('show');
        }
        });
    });